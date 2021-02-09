Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });

  camera = document.getElementById("camera");

Webcam.attach( '#camera' );

      
function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/4fv0j57M4/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
  
  function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
   }
   

  function speak()
  {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
  }


  function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_hand_name").innerHTML = results[0].label;
      document.getElementById("result_hand_name2").innerHTML = results[1].label;
      if (results[0].label == "ROCK/YOLO?") {
        document.getElementById("update_hand").innerHTML = "&#129304;";
      }
      if (results[0].label == "Peace out?") {
        document.getElementById("update_hand").innerHTML = "&#9996;";
      }
      if (results[0].label == "OK?") {
        document.getElementById("update_hand").innerHTML = "&#128077;";
      }
      if (results[1].label == "ROCK/YOLO?") {
        document.getElementById("update_hand2").innerHTML = "&#129304;";
      }
      if (results[1].label == "Peace out?") {
        document.getElementById("update_hand2").innerHTML = "&#9996;";
      }
      if (results[1].label == "OK?") {
        document.getElementById("update_hand2").innerHTML = "&#128077;";
      }
    }
    
   }
   
   