# MASHI — RED10

MASHI es el nombre de trabajo recomendado para RED10: corto, cálido y asociado a compañerismo. Antes de comprar dominio o registrar la marca, verifica disponibilidad comercial, dominio, redes y antecedentes ante SENADI.

## 1. Instalar
Instala Node.js LTS y ejecuta:

```bash
npm install -g firebase-tools
firebase login
```

## 2. Configurar Firebase
En Firebase Console:
1. Crea o selecciona un proyecto.
2. Activa Authentication > Email/Password.
3. Crea Firestore Database.
4. Registra una aplicación web.
5. Activa Storage si usarás imágenes.

## 3. Conectar y desplegar
Desde la carpeta raíz:

```bash
firebase use --add
cd functions
npm install
cd ..
firebase deploy --only hosting,firestore
firebase deploy --only functions
```

La URL será parecida a `https://TU-PROJECT-ID.web.app`.

## 4. GitHub
```bash
git init
git add .
git commit -m "Inicializar MASHI RED10"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/mashi-red10.git
git push -u origin main
```

## Alcance actual
La web pública funciona y Firebase Hosting/Firestore/Functions están preparados. El formulario de esta primera versión guarda el correo en localStorage; el registro de usuarios, paneles, QR y beneficios deben conectarse en la siguiente fase usando Firebase Auth, Firestore y funciones callable.

No subas claves privadas, archivos `.env` ni `serviceAccountKey.json`.
