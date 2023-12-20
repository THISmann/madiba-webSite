# Cahier des charges pour l'application de génération d'adresses et d'achats automatisés

## 1. Introduction

### 1.1 Objectif
Le projet vise à créer une application permettant aux utilisateurs de générer automatiquement des adresses et des numéros de téléphone en fonction des pays choisis, facilitant ainsi les achats en ligne. Si l'utilisateur ne possède pas de système de paiement disponible sur Amazon ou eBay, l'application lui permet d'envoyer des liens d'articles ou de produits. Une fois que l'utilisateur a confirmé l'achat, l'application doit procéder à l'achat automatique en utilisant les API des services de commerce électronique. L'administrateur doit pouvoir effectuer le paiement des produits. L'application doit également fournir des fonctionnalités de gestion des comptes et garantir la sécurité des informations.

### 1.2 Fonctionnalités clés
1. **Génération d'adresses et de numéros de téléphone :** Les utilisateurs peuvent générer automatiquement des adresses et des numéros de téléphone en fonction des pays choisis.
2. **Soumission de liens :** Les utilisateurs peuvent envoyer des liens d'articles ou de produits depuis des sites tels qu'Amazon et eBay.
3. **Confirmation d'achat :** Les utilisateurs peuvent confirmer l'achat après avoir examiné les détails de la commande.
4. **Achat automatique :** L'application doit intégrer les API d'Amazon et eBay pour effectuer automatiquement l'achat une fois la confirmation reçue.
5. **Gestion des paiements :** L'administrateur doit pouvoir procéder au paiement des produits.
6. **Gestion des comptes :** Les utilisateurs doivent pouvoir créer un compte, se connecter, et gérer leurs informations personnelles.

## 2. Exigences fonctionnelles

### 2.1 Interface utilisateur
L'application doit avoir une interface utilisateur conviviale avec les fonctionnalités suivantes :
- Génération d'adresses et de numéros de téléphone.
- Formulaire de soumission de liens.
- Page de confirmation d'achat.
- Gestion des comptes.

### 2.2 Fonctionnalités utilisateur
- Les utilisateurs doivent pouvoir créer un compte et se connecter.
- Les utilisateurs doivent pouvoir générer des adresses et des numéros de téléphone en fonction des pays choisis.
- Les utilisateurs doivent pouvoir soumettre des liens et confirmer les achats.
- Les utilisateurs doivent pouvoir consulter l'historique de leurs achats.

### 2.3 Fonctionnalités administrateur
- L'administrateur doit pouvoir se connecter à un tableau de bord sécurisé.
- L'administrateur doit pouvoir visualiser les commandes en attente de paiement.
- L'administrateur doit pouvoir effectuer le paiement des commandes.

## 3. Exigences techniques

### 3.1 Technologies utilisées
- **Backend:** Python, Django, Django REST framework, GraphQL.
- **Base de données:** SQLite (pour le développement), PostgreSQL (pour la production).
- **Authentification:** JWT (JSON Web Tokens) pour les utilisateurs.
- **Intégration d'API:** Utilisation des API Amazon et eBay.
- **Génération d'adresses:** Utilisation de services tiers pour la génération d'adresses.

### 3.2 Sécurité
- Toutes les transactions et informations utilisateur doivent être sécurisées.
- Utilisation de HTTPS pour les communications.
- Gestion sécurisée des jetons d'authentification.

### 3.3 Gestion de versions
Utilisation de Git pour le contrôle de version.

## 4. Développement et tests

### 4.1 Environnement de développement
- Installation de l'environnement de développement avec des dépendances spécifiées dans un fichier de configuration.

### 4.2 Tests
- Écriture de tests unitaires pour les fonctionnalités clés.
- Réalisation de tests d'intégration pour s'assurer de la compatibilité avec les API d'Amazon et eBay.

## 5. Documentation

- Documentation complète du code, expliquant les fonctionnalités et l'architecture de l'application.
- Documentation sur le déploiement de l'application en production.

# Endpoints pour l'API Django REST avec GraphQL

## 1. Authentification

   - `POST /api/token/ ` : Obtenir un jeton d'accès avec des informations d'identification valides
   - `POST /api/auth/register` : Créer un nouveau compte utilisateur avec validation par e-mail ou SMS.
   - `POST /api/auth/login` : Authentifier un utilisateur existant.
   - `GET /api/auth/logout` : Déconnecter un utilisateur.
   - `POST /api/auth/verify-email` : Vérifier l'e-mail de l'utilisateur.
   - `POST /api/auth/resend-verify-email` : Vérifier l'e-mail de l'utilisateur.
   - `POST /api/auth/password-change/`
   - `POST /api/auth/forgot-password` : .
   - `POST /api/auth/reset-password` .
   - `GET /api/auth/me/` : Obtenir les infos sur le users
   - `POST /api/auth/token-verify/` :
   - `POST /api/auth/token/verify/` :

2. **Génération d'Adresse et Numéro de Téléphone :**
   - `GET /api/address/:country` : Générer une adresse aléatoire en fonction du pays spécifié.
   - `GET /api/phone/:country` : Générer un numéro de téléphone aléatoire dans la liste de contacts prédéfinie pour le pays spécifié.
   - `GET /api/user/addresses` : Obtenir la liste des adresses uniques de l'utilisateur.
   - `GET /api/user/phones` : Obtenir la liste des numéros de téléphone uniques de l'utilisateur.
  

   - 
  - **Méthode:** POST
  - **Description:** Obtenir un jeton d'accès avec des informations d'identification valides.

## 2. Génération d'adresses et de numéros de téléphone

- **Endpoint:** `/api/generate-info/`
  - **Méthode:** POST
  - **Description:** Permet aux utilisateurs de générer des adresses et des numéros de téléphone en fonction des pays choisis.

## 3. Soumission de liens

- **Endpoint:** `/api/submit-link/`
  - **Méthode:** POST
  - **Description:** Permet aux utilisateurs de soumettre des liens d'articles ou de produits.

## 4. Confirmation d'achat

- **Endpoint:** `/api/confirm-purchase/`
  - **Méthode:** POST
  - **Description:** Permet aux utilisateurs de confirmer l'achat après avoir examiné les détails de la commande.

## 5. Tableau de bord administrateur

- **Endpoint:** `/api/admin/dashboard/`
  - **Méthode:** GET
  - **Description:** Récupérer les commandes en attente de paiement pour l'administrateur.

## 6. Paiement administrateur

- **Endpoint:** `/api/admin/payment/`
  - **Méthode:** POST
  - **Description:** Permet à l'administrateur de procéder au paiement des commandes.

Ces endpoints constituent une base de départ. Ils doivent être adaptés et étendus en fonction des besoins spécifiques du projet.
