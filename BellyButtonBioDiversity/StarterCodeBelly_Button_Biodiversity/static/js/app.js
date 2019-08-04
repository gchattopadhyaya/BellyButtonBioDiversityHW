function buildMetadata(sample) {

    // @TODO: Complete the following function that builds the metadata panel
  
    // Use `d3.json` to fetch the metadata for a sample
    var metadata = "/metadata/" + sample
      // Use d3 to select the panel with id of `#sample-metadata`
    var metadatapannel = d3.select("#sample-metadata");
      // Use `.html("") to clear any existing metadata
      metadatapannel.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      d3.json(metadata).then(function (data) {
        Object.entries(data).forEach(([key, value]) => {
            metadatapannel.append("h4").text(`${key}: ${value}`
            );
        })
        // BONUS: Build the Gauge Chart
        // buildGauge(data.WFREQ);
    })
  }
  
  function buildCharts(sample) {
    // @TODO: Use `d3.json` to fetch the sample data for the plots
    var SampleURL = "/samples/" + sample;
    d3.json(SampleURL).then(function (plotData){
        // @TODO: Build a Bubble Chart using the sample data
        var trace1 = {
                x: plotData.otu_ids,
                y: plotData.sample_values,
                mode: 'markers',
                text: plotData.otu_labels,
                marker: {
                    color: plotData.otu_ids,
                    size: plotData.sample_values,
                    colorscale: "Earth"
                }
        };

        var trace1 = [trace1];
        var layout = {
            showlegend: false,
            hieght: 600,
            width: 1500
        };

        Plotly.newPlot('bubble', trace1, layout);
    

      // @TODO: Build a Pie Chart
      // HINT: You will need to use slice() to grab the top 10 sample_values,
      // otu_ids, and labels (10 each).
      var plotData = [{
          values: plotData.sample_values.slice(0,10),
          labels: plotData.otu_ids.slice(0,10),
          hovertext: plotData.otu_labels.slice(0,10),
          type: 'pie'
      }];
      var layout = {
          showlegend: true,
      };
      Plotly.newPlot('pie', plotData, layout);
    })

  }
  
  function init() {
    // Grab a reference to the dropdown select element
    var selector = d3.select("#selDataset");
  
    // Use the list of sample names to populate the select options
    d3.json("/names").then((sampleNames) => {
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      // Use the first sample from the list to build the initial plots
      const firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    buildCharts(newSample);
    buildMetadata(newSample);
  }
  
  // Initialize the dashboard
  init();
  
