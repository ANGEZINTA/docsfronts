# Plateforme
Il s'agit d'un système qui propose une gamme de services et de fonctionnalités répondant à des besoins spécifiques.


Notamment pour autoriser l'affichage de divers formulaires en créant et en modifiant de nouvelles catégories, ainsi qu'en mettant en place de nouvelles plateformes.




*

![Alt text](/public/plateforme.png)

*


![Alt text](/public/creer_plateforme.png)


*

````bootstrap
 <div class="btn btn-primary btn-sm">
    <i class="fad fa-plus"></i>
    {{trans('Créer une plateforme')}}
</div>

````
*

![Alt text](/public/activer_plateform.png)

*

````template
<label class="form-check form-switch form-check-custom form-check-solid m-2">
    <input :checked="isShown(platform,survey)" @change="toggleSurvey(platform.id,survey.id)"
            class="form-check-input"
            type="checkbox"/>
</label>

````
*

Exemple de quelques formulaire : 

*

![Alt text](/public/form_assureurs.png)

*



![Alt text](/public/form_typage_donnees.png)



