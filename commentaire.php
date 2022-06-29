<?php
    $host = "localhost";
    $dbname = "energie-generation";
    $username = "root";
    $password = "";
     $id_article=3;       
    $conn = mysqli_connect( $host,
                            $username,
                            $password,
                            $dbname);
            
    if (mysqli_connect_errno()) {
        die("Connection error: " . mysqli_connect_error());
	}  
	
	if (isset($_POST['submit-commentaire'])) {
       if(isset($_POST['pseudo'],$_POST['commentaire']) AND !empty($_POST['pseudo']) AND !empty($_POST['commentaire']) ){
			  $pseudo =htmlspecialchars($_POST['pseudo']);
			  $commentaire = htmlspecialchars($_POST['commentaire']);

   
			  $sql = "INSERT INTO commentaire (pseudo,commentaire)
        VALUES (?, ?)";
 
 $stmt = mysqli_stmt_init($conn);

 if ( ! mysqli_stmt_prepare($stmt, $sql)) {
  
	 die(mysqli_error($conn));
	 $conn->close();
 }
 
 mysqli_stmt_bind_param($stmt, "ss",
						$pseudo,
						$commentaire);
 
 mysqli_stmt_execute($stmt);
	   } else{
		   $c_error="tout les champ doivent etre completer";
	   }
		
	}
?>



<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>blog</title>
	<script src="like.js"> </script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> 
	<link rel="stylesheet" href="css/blog.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
		integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
		crossorigin="anonymous" referrerpolicy="no-referrer" />
	<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>
<body>
		<nav class="navbar navbar-expand-lg navbar-grège bg-grège">
			<div class="container-fluid">
			   <a class="navbar-brand d-lg-none" href="#">
				<img src="Images/img3.webp" alt="le logo" width="100px">
			  </a> 
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			  </button>
			  <div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mx-auto">
				  <li class="nav-item">
					<a class="nav-link " href="index.html">Accueil</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" href="programme.html">Nos Programmes</a>
				  </li>
				   <a class="navbar-brand d-none d-lg-block" href="#">
					<img src="Images/img3.webp" alt="le logo" width="150px">
				  </a>
				  <li class="nav-item ">
					<a class="nav-link " href="space.html">
					  Energy Space
					</a>
				  <li class="nav-item">
					<a class="nav-link" href="#">Blog</a>
				  </li>
				</ul>
				
			  </div>
			</div>
		  </nav>
		  <div class="drapeau">
			<img src="Images/FRA_2x.png" alt="choix de la page en français">
			<img src="Images/GBR_2x.png" alt="choix de la langue en anglais">
		  </div>

		  <hr class="break-first">
		  
		  <nav>
			<div class="onglets">
			  <a href="#">Home</a>
			  <a href="formation.html">Formations</a>
			</div>
		  </nav>
		  <section class="articles">
    
			<div class="article">
			 <div class="left">
			   <img src="Images/ez.jpg" alt="">
			 </div>
			 <div class="right">
				<div id="tof">
					<img src="Images/photo.jpg" alt="photo">
                     <div id="fot">
						<p class="auteur">Odjouman Allagbe</p>
						<p class="date">Juillet, 24, 2020</p>
					 </div>
				   
				</div>
			  <a href="#"> <h1>Coup de projecteur sur le parcours entrepreneuriat de la Formation Solaire à Energy Generation </h1></a>
			   <a href="#"><p class="description">Parce que le solaire représente une véritable opportunité de création d'emplois pour les jeunes, tout en participant au développement...
			</p></a>
			<hr>
			<div style="display: flex;"> <br> <br>
				<p id="count"> </p>&nbsp <p>vue</p>
			   </div>
			<hr>
			 </div>
		   </div> 
		   
		  </section>

			 <br><br>

        <form  method="POST">

       <input type="text" name="pseudo" placeholder="votre pseudo"><br>
      <textarea name="commentaire" placeholder="entrer votre commentaire ..."></textarea><br>
      <input type="submit" value="poster" name="submit-commentaire"><br>
		</form> 
		  

		<?php

		if (isset($c_error)){

            echo($c_error);

		}
		while($c =$commentaire->fetch()){
			$c['commentaire'];
		}
		?>
			  <script>
				const countEl = document.getElementById("count");
				countvisits();
		  
				function countvisits() {
				  fetch('https://api.countapi.xyz/update/ezokovich/maz/?amount=1')
					.then((res) => res.json())
					.then((res) => {
					  countEl.innerHTML = res.value;
					});
				}
			  </script>
			


	<!-- ======================================= debut du footer avec les section ==============================-->

	<footer class="footer">

		<!--===================================== debut de la section ils croient en nous =======================-->

		<section class="partenaires1">
			<div class="believe">
				<h1>ILS CROIENT EN NOUS</h1>
			</div>
			<div class="container my-3">
				<div class="row ">

					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_giz.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_haut.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_horizon.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_lomé.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_oif.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_mit.webp" alt=""></a>
					</div>

				</div>
				<div class="row my-5">
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/IFDD_LOGO_couleur.webp"
								alt=""></a></div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg-edf.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg-euro.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg-git.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg-saber.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_afrik.webp" alt=""></a>
					</div>
				</div>
				<div class="row">
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_capital.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_electrik.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_fond.webp" alt=""></a></div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_energy.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/armoiries.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_embassade.webp" alt=""></a>
					</div>
				</div>
				<div class="row">
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_paris.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_reseau.webp" alt=""></a>
					</div>
					<div class="col-4 col-md-2"><a href=""><img class="w-50" src="croire/lg_bleu.webp" alt=""></a>
					</div>
				</div>
			</div>
		</section>

		<!--========================================= fin de la section ils croient en nous ===================================-->

		<!--========================================= debut de la section ils parlent de nous ==================================-->
		<section class="medias">
			<div>
				<div class="journaux">
					<h1>ILS PARLENT DE NOUS</h1>
				</div>

				<div class="container ">
					<div class="row my-5">

						<div class="col-4 col-md-2"><a href=""><img class="w-100" src="magazine/le monde.webp"
									alt=""></a>
						</div>

						<div class="col-4 col-md-2"><a href=""><img class="w-100" src="magazine/figaro.webp" alt=""></a>
						</div>
						<div class="col-4 col-md-2"><a href=""><img class="w-100" src="magazine/afrique.webp"
									alt=""></a>
						</div>
						<div class="col-4 col-md-2"><a href=""><img class="w-100" src="magazine/togo.webp" alt=""></a>
						</div>

					</div>
					<div class="row my-5">
						<div class="col-4 col-md-2"><a href=""><img class="w-100" src="magazine/tribune.webp"
									alt=""></a></div>
						<div class="col-4 col-md-2"><a href=""><img class="w-100" src="magazine/f30.webp" alt=""></a>
						</div>
						<div class="col-4 col-md-2"><a href=""><img class="w-100" src="magazine/forbes.webp" alt=""></a>
						</div>
						<div class="col-4 col-md-2"><a href=""><img class="w-100" src="magazine/le point.webp"
									alt=""></a>
						</div>
						<div class="col-4 col-md-2"><a href=""><img class="w-100" src="magazine/tv5.webp" alt=""></a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!--=================================================== fin de la section ils parlent de nous  ================================-->

		<!--=================================================== debut de la section newsletter ==============================================-->

		<section class="newsletter">
			<h1 class="news">NEWSLETTER</h1>
			<form class="option">
				<div class="form">
					Get our latest info, podcasts, advices...<br /><br /><br />
					First Name<br>
					<input type="nom"><br /><br />
					Email<br />
					<input type="mail"><br />
				</div>
				<div class="checkbox">
					<div>
						<input type="checkbox">Je prefere recevoir les information en francais<br /><br />
						<input type="checkbox">I wish to receive the content in English<br />
					</div>
					<div><button>subscribe</button></div>
				</div>
			</form>
		</section>

		<!--=================================================== fin de la section newsletter ============================================-->

		<!--==================================================== debut de la section coppyright et lien =========================================-->



		<section class="lien">
			<div class="reseaux">
				<a href="#">
					<i class="fa-brands fa-facebook-square"></i>
				</a>

				<a href="#">
					<i class="fa-brands fa-twitter"></i>
				</a>

				<a href="#">
					<i class="fa-brands fa-linkedin"></i>
				</a>

				<a href="#">
					<i class="fa-brands fa-youtube"></i>
				</a>
			</div>

			<div class="lg_foot">
				<img src="Images/img3.webp" alt="">

			</div>
			<div>
				<p class="copy">
					<i class="fa-regular fa-copyright"></i>2020 - Energy Generation - All rights reserved.
				</p>
				<p class="arrow"><a href="#"><i class="fa-solid fa-angles-up"></i></a></p>
			</div>
		</section>
	</footer>

	<!--===================================================== fin de la section footer ==================================================-->



		  
		<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>