export const layers = [{
    id: 1,
    text: "Meghalaya",
    show: false,
    class: "Census",
    layer: "meghalaya_district",
    link: "/geoserver/ne/wms",
    info: "The layer displays the whole of Meghalaya.",
    legend:
      "http://localhost:8080/geoserver/ne/wms?service=WMS&version=1.1.0&request=GetMap&layers=ne%3Ameghalaya_district&bbox=89.82123565673828%2C25.023056030273438%2C92.80481719970703%2C26.119462966918945&width=768&height=330&srs=EPSG%3A4326&styles=&format=application/openlayers",
  },
  {
    id: 2,
    text: "Census",
    show: false,
    class: "Census",
    layer: "analytic:ner_census",
    link: "https://geoserver.nesdr.gov.in/geoserver/wms",
    info: "The layer displays the spatial location of Census 2011 villages. It is captured from NESAC's NESDR database.",
    legend:
      "https://geoserver.nesdr.gov.in/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=NEC:assam_census",
  },
  {
    id: 3,
    text: "Embankment",
    show: false,
    class: "Flood",
    layer: "NERDRR_NEW:embank",
    link: "https://geoserver.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    info: "This layer represents embankment structures built along the river at multiple stretches to prevent river water from flooding.",
    attributes: [
      { value: "District Name", text: "District Name" },
      { value: "Area", text: "Area" },

      // { value: "diff", text: "Change"},
    ],
  },
  {
    id: 4,
    text: "Breach Locations",
    show: false,
    class: "Flood",
    layer: "NERDRR_NEW:breach_locations",
    link: "https://geoserver.nesdr.gov.in:442/geoserver/NERDRR_NEW/wms",
    info: "This layer represents point GIS map of multiple locations where breaches occurred between the period of 2013 -2017.",
    attributes: [
      { value: "name", text: "Name" },
      //{ value: "", text: "" },

      // { value: "diff", text: "Change"},
    ],
  },
  {
    id:5,
    text: "Prone Location",
    show: false,
    class: "Flood",
    layer: "Flood_Meg:map(1)",
    link: "/geoserver/Flood_Meg/wms",
    info: "This is just a test layer",
    legend: "http://localhost:8080/geoserver/Flood_Meg/wms?service=WMS&version=1.1.0&request=GetMap&layers=Flood_Meg%3Amap%281%29&bbox=89.97438049316406%2C25.410032272338867%2C92.05876922607422%2C25.953760147094727&width=768&height=330&srs=EPSG%3A4326&styles=&format=application/openlayers",
  },

  // {
  //   id: 6,
  //   text: "Village",
  //   show: false,
  //   class: "Mobile App Survey",
  //   layer: "village",
  //   link: "/geoserver/Village/wms",
  //   identify: false,
  //   legend: "http://localhost:8080/geoserver/Village/wms?service=WMS&version=1.1.0&request=GetMap&layers=Village%3Avillage&bbox=89.82666015625%2C25.03827476501465%2C92.76891326904297%2C26.1160831451416&width=768&height=330&srs=EPSG%3A4326&styles=&format=application/openlayers",
  //   district: "North Garo Hills",
 
  // },
]
