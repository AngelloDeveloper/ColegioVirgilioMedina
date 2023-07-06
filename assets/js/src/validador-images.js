//ALERTAS DE VALIDACION
function alert_Images(enunciado, type) {
    let template = `
        <div class="alert alert-${type}" role="alert" style="margin-top: 10px;">
            ${enunciado}
        </div>
    `;

    return template;
}

//FORMATO DE IMAGEN
function formatImages(e, file) {
    return e.target.files.lenght == 0 || !(/\.(jpg|png|jpeg)$/i).test(file.name) ? false : true ;
}

//DIMENCIONES DE LA IMAGEN
function dimentionsImages(file, callback) {
    var img = new Image();
    img.onload = function dimension() {
        if(this.width.toFixed(0) != 200 && this.height.toFixed(0) != 200) {
            callback(false);
        } else {
            callback(true);
        }
            
    };
    img.src = URL.createObjectURL(file);
}

//TAMAÑO MAXIMO PERMITIDO DE LA IMAGEN
function sizeImages(e) {
    var sizeByte = e.target.files[0].size;
    var siezekiloByte = parseInt(sizeByte / 1024);
    return siezekiloByte > 100 
        ? false 
        : true ;
}

//VERIFICACION DE ROSTROS
const verifyFaces = async (img, lienzo) => {
    const MODEL_URL = '/ColegioVirgilioMedina/assets/face-api/models';
    const options = new faceapi.SsdMobilenetv1Options({ minConfidence: 0.9 })

    await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
    await faceapi.loadFaceLandmarkModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
    await faceapi.loadFaceExpressionModel(MODEL_URL);

    const image = document.getElementById(img);
    const canvas = document.getElementById(lienzo);
    
    let fullFaceDescriptions = await faceapi.detectAllFaces(image, options)
        .withFaceLandmarks()
        .withFaceDescriptors()
        .withFaceExpressions();
    
    faceapi.draw.drawDetections(canvas, fullFaceDescriptions, 0.8);
    faceapi.draw.drawFaceLandmarks(canvas, fullFaceDescriptions);

    return fullFaceDescriptions;
}

//PREVISUAILIZADOR DE IMAGENES
function previewBeforeUpload(id, e) {
    let file = e.target.files[0];
    let url = URL.createObjectURL(file);

    document.querySelector("#"+id+"-preview div").innerHTML = file.name;
    document.querySelector("#"+id+"-preview img").src = url;
}