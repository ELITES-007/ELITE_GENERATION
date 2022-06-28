<?php
require_once('connect.php');


$nom = $_POST["nom"];
$email = $_POST["email"];
$langue = filter_input(INPUT_POST, "langue", FILTER_VALIDATE_INT); 


 
$sql = "INSERT INTO newsletter (nom, email,langue)
        VALUES (?, ?, ?)";

$stmt = mysqli_stmt_init($conn);

if ( ! mysqli_stmt_prepare($stmt, $sql)) {
    die(mysqli_error($conn));
}


mysqli_stmt_bind_param($stmt, "ssi",
                       $nom,
                       $email,
                       $langue);

mysqli_stmt_execute($stmt);

echo "record saved.";


$conn->close();


?> 