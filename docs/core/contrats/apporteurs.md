# Apporteur

Un apporteur est  l'intermédiaire entre les assureurs et les clients, chargé de présenter et de vendre des produits d'assurance. 


Nous enregistrons ici l'initiateur du contrat et avons la possibilité de générer des codes pour l'apporteur avec des paramètres.


*

![Alt text](/public/apporteurs.png)

###

**differents boutons**

### <ul></ul> creer ul
*
![Alt text](/public/creer_apporteurs.png)


```template

<div class="btn btn-primary btn-sm" v-b-modal="'editPartner'">
              <i class="fad fa-plus"></i>
              Créer
 </div>

```
*
###

*
![Alt text](/public/generer_code_apporteurs.png)

```template

 <div @click="generate" class="btn btn-success ms-2 btn-sm">
              <i class="fad fa-cogs"></i>
              Générer 10 nouveaux codes
 </div>

```
*
### 
*
![Alt text](/public/generer_parametre_apporteurs.png)

```template

 <router-link :to="{name : 'partner-parameters'}" class="btn btn-warning ms-2 btn-sm">
              <i class="fad fa-edit"></i>
              Gérer les paramètres
 </router-link>

```
*