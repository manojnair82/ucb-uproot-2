import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn} from "../../components/Form";
import axios from "axios";
import * as d3 from 'd3';
import "./graphstyle.css";



class D3graph extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    product: [],
    title: "",
    reporter: "",
    summary: "",
    newArray: [],
    component: "",
    subcomponent: "",
    severity: "",
    issueType: "",
    // linksD3: [],
    // nodesD3: [],
    graph: [],
    width: 100
  };
  lastId = -1;

  componentDidMount() {
    this.loadBooks();
    // this.readD3Node();
    // this.readD3Link();
    // this.loadNodes();
    // this.loadLinks();

    const url = 'https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json';

    const urllink = 'http://localhost:3001/api/comps/links';

    const urlnode = 'http://localhost:3001/api/comps/nodes';

    API.getNodes().then(res => {
      const nodesD3 = res.data;
  

    API.getLinks().then(res => {
     const linksD3 = res.data;
     console.log(nodesD3);
     console.log(linksD3);



    //     var graph = this.graph = {
    //     "nodes":[{"name":"Cause"},{"name":"Effect"}],
    //     "links":[{"source":0,"target":1}]
    //     };



    //         this.addNode = function (name) {

    //         graph["nodes"].push({"name":name});
    //         // update();
    //         }

            // this.removeNode = function (name) {
            // graph["nodes"] = _.filter(graph["nodes"], function(node) {return (node["name"] != name)});
            // graph["links"] = _.filter(graph["links"], function(link) {return ((link["source"]["name"] != name)&&(link["target"]["name"] != name))});
            // // update();
            // }


            const width = 840,
            height = 680;

      //Initializing chart
      const chart = d3.select('.chart')
        .attr('width', width)
        .attr('height', height);

      
      //Initializing force simulation
      const simulation = d3.forceSimulation()
        .force('link', d3.forceLink().distance(width/2))
        .force('charge', d3.forceManyBody())
        .force('collide', d3.forceCollide())
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force("y", d3.forceY(1000))
        .force("x", d3.forceX(2000));

        var animating = true;

      var animationStep = 400;
      
      var div = d3.select("body").append("div")   
    .attr("class", "tooltip")               
    .style("opacity", 0)

      

      
      //Creating links
      const link = chart.append('g')
        .attr('class', 'links')
        .selectAll('line')
        .data(linksD3).enter()
        .append('line');
      
      //Creating nodes
// var node = svg.selectAll('.node')
//     .data(nodes)
//     .enter().append('circle')
//     .attr('class', 'node')
//     .attr('r', width/100)
//     .attr('cx', function(d) { return d.x; })
//     .attr('cy', function(d) { return d.y; }).call

// var node = svg.selectAll('.node')
//     .data(nodes)
//     .enter().append('circle')
//     .attr('class', 'node')
//     .attr('r', width/100)
//     .attr('cx', function(d) { return d.x; })
//     .attr('cy', function(d) { return d.y; }).call(d3.behavior.drag()
//         .on("drag", dragged));


      const node = d3.select('.chartContainer')
        .selectAll('.node')
        .data(nodesD3).enter()
        .enter().append('circle')
    .attr('class', 'node')
    .attr('r', width/100)
    .attr('cx', function(d) { return d.x; })
    .attr('cy', function(d) { return d.y; }).call(d3.drag()).on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);


  node.append("image")
      .attr("xlink:href", "https://github.com/favicon.ico")
      .attr("x", -8)
      .attr("y", -8)
      .attr("width", 16)
      .attr("height", 16);



 simulation.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });




            //Drag functions
     function dragstarted(d) {
  d3.select(this).raise().classed("active", true);
}

function dragged(d) {
  d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
}

function dragended(d) {
  d3.select(this).classed("active", false);
}
      //Setting location when ticked
      // const ticked = () => {
      //   link
      //     .attr("x1", d => { return d.source.x; })
      //     .attr("y1", d => { return d.source.y; })
      //     .attr("x2", d => { return d.target.x; })
      //     .attr("y2", d => { return d.target.y; });

      // node
      //     .attr("style", d => { 
      //       return 'left: ' + d.x + 'px; top: ' + (d.y + 72) + 'px'; 
      //     });
      // };
      
      //Starting simulation
      simulation.nodes(nodesD3);
      
      simulation.force('link')
        .links(linksD3);


         // simulation.restart(); 
      })
    });

  }

  // loadNodes = () => {
  //     API.getNodes()
  //     .then(res => this.setState({ nodesD3: res.data[0].nodes}))
  //     .catch(err => console.log(err));
  // }

  // loadLinks = () => {
  //     API.getLinks()
  //     .then(res => this.setState({ linksD3: res.data}))
  //     .catch(err => console.log(err));
  // }

  
   loadBooks = () => {
        API.getBooks()
        .then(res =>
          this.setState({ product: res.data, title: "", reporter: "", summary: "", component: "", subcomponent: "", severity: "", issueType: "" })
        )
        .catch(err => console.log(err));
    }

    readD3Node = () => {
      var node1 = [];
      if(this.state.nodesD3.length)
      {
        for(var i=0;i<this.state.nodesD3.length;i++)
        {
          console.log(this.state.nodesD3[i]);
            node1.push({"id":this.state.nodesD3[i]});
            // update();
        }
        console.log(node1);
        this.state.nodesD3 = node1;
      }
    }


     readD3Link = () => {
      var link1 = [];
      if(this.state.linksD3.length)
      {
        for(var i=0;i<this.state.linksD3.length;i++)
        {
          // console.log(this.state.linksD3[i].target);
            link1.push({"source": this.state.linksD3[i].source, "target": this.state.linksD3[i].target});
            // update();
        }
        console.log(link1);
        this.state.linksD3 = link1;
      }
     }

  render() {
      // console.log(this.state.nodesD3);
      // console.log(this.state.linksD3);
      // // this.readD3Node();
      // this.readD3Link();
      // if(this.state.linksD3.length<0)
      // {
        return (
          <div className='container'>
            <Jumbotron>  
             <h1>Issues Graph</h1>
            </Jumbotron>
            <div className='chartContainer'>
              <svg className='chart'>chart
              </svg>
            </div>
                      <Col size="md-12 sm-12">

                  <h1>Issues Reported</h1>

                {this.state.product.length ? (
                  <List>
                    {this.state.product.map(book => (
                      <ListItem key={book._id}>
                        <Link to={"/issues/" + book._id}>
                          <strong>
                            {book.title} by {book.reporter}
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
          </div>
        ); 

  } 
}

export default D3graph;