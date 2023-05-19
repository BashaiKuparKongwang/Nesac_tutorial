<?php
// Enable CORS
header('Access-Control-Allow-Origin: *');

// Database connection settings
$dsn = "pgsql:host=localhost;dbname=Test2;port=5432";
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false
];

// Establish a database connection
$conn = new PDO($dsn, 'postgres', 'test', $opt);

// Get the request data
$lat = $_POST['lat'];
$lon = $_POST['lon'];
$radius = (float)$_POST['radius'];
$table = $_POST['database'];
$shape = $_POST['shape'];
$geojson = $_POST['geojson'];
$isbase = $_POST['isbase'];

// Prepare the SQL query
if ($shape == 'Circle') {
    if ($isbase == 'true') {
        $query = "SELECT code, 'N/A' as class, sub_class, length_km as area, ST_AsText(ST_Centroid(geom)) as a, ST_AsGeoJSON(geom) as b FROM public.$table WHERE ST_Distance(ST_Transform(geom, 3857), ST_Transform('SRID=4326;POINT($lon $lat)'::geometry, 3857))/1000 <= $radius";
    } else {
        $query = "SELECT code, class, sub_class, area, ST_AsText(ST_Centroid(geom)) as a, ST_AsGeoJSON(geom) as b FROM public.$table WHERE ST_Distance(ST_Transform(geom, 3857), ST_Transform('SRID=4326;POINT($lon $lat)'::geometry, 3857))/1000 <= $radius";
    }

    // Execute the query
    $statement = $conn->prepare($query);
    $statement->execute();
    $result = $statement->fetchAll();

    // Return the result as JSON
    echo json_encode($result, JSON_PRETTY_PRINT);
}
?>