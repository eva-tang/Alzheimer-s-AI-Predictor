{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww15420\viewh11780\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let model, webcam;\
\
async function loadModel() \{\
    model = await tmImage.load('model/model.json', 'model/weights.bin');\
    console.log('Model loaded');\
\}\
\
async function setupWebcam() \{\
    const video = document.getElementById('webcam');\
    webcam = await navigator.mediaDevices.getUserMedia(\{ video: true \});\
    video.srcObject = webcam;\
\}\
\
async function predict() \{\
    const predictions = await model.predict(webcam);\
    document.getElementById('prediction-result').innerText = `Prediction: $\{predictions[0].className\}`;\
\}\
\
// Load the model and webcam when the page is loaded\
window.onload = function() \{\
    loadModel();\
    setupWebcam();\
\};\
}