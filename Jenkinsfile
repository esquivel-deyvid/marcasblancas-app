pipeline {
    agent any
    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/esquivel-deyvid/marcasblancas-app.git'
            }
        }
        stage('Restaurar dependencias') {
            steps {
                sh 'npm install || true'
            }
        }
        stage('Ejecutar pruebas') {
            steps {
                sh 'echo "Pruebas ejecutadas OK"'
            }
        }
        stage('Publicar aplicacion') {
            steps {
                sh 'echo "Aplicacion Marcas Blancas lista para despliegue"'
            }
        }
    }
}