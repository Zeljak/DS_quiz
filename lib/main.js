var brojAodg=0,brojBodg=0,brojCodg=0,brojDodg=0,najviseOdg=0,izbor="nijedan";document.querySelector("#submit-form")&&document.querySelector("#submit-form").addEventListener("click",(function(o){if(o.preventDefault(),document.querySelector("#stedljiv").checked?brojAodg++:document.querySelector("#sportski").checked?brojBodg++:document.querySelector("#praktican").checked?brojCodg++:document.querySelector("#idealan").checked&&brojDodg++,document.querySelector("#oprezna").checked?brojAodg++:document.querySelector("#pretjecanje").checked?brojBodg++:document.querySelector("#snalazljiva").checked?brojCodg++:document.querySelector("#opustena").checked&&brojDodg++,document.querySelector("#prostranost").checked?brojAodg++:document.querySelector("#potrosnja").checked?brojBodg++:document.querySelector("#inovativnost").checked?brojCodg++:document.querySelector("#snaga").checked&&brojDodg++,document.querySelector("#uvelike").checked?brojAodg++:document.querySelector("#sportski_duh").checked?brojBodg++:document.querySelector("#svrsishodan").checked?brojCodg++:document.querySelector("#moc").checked&&brojDodg++,document.querySelector("#povezanost").checked?brojAodg++:document.querySelector("#sportski_tim").checked?brojBodg++:document.querySelector("#poslovna_veza").checked?brojCodg++:document.querySelector("#dobroizlo").checked&&brojDodg++,brojAodg>najviseOdg&&(najviseOdg=brojAodg,izbor="brojAodg"),brojBodg>najviseOdg&&(najviseOdg=brojBodg,izbor="brojBodg"),brojCodg>najviseOdg&&(najviseOdg=brojCodg,izbor="brojCodg"),brojDodg>najviseOdg&&(najviseOdg=brojDodg,izbor="brojDodg"),"nijedan"==izbor)document.querySelector(".error__message").classList.remove("is-hidden");else switch(izbor){case"brojAodg":window.open("http://localhost:8848/odgovorA.html","_self");break;case"brojBodg":window.open("http://localhost:8848/odgovorB.html","_self");break;case"brojCodg":window.open("http://localhost:8848/odgovorC.html","_self");break;case"brojDodg":window.open("http://localhost:8848/odgovorD.html","_self")}}));