# Avenants
Cette partie nous permet de modifier un contrat d'assurance existant sans pour autant devoir en créer un autre. 


![Alt text](/public/contrats.png)

*
###

![Alt text](/public/creer_contrat.png)

*
```template
<template v-slot:button-content>
     <div class="btn btn-sm btn-clean btn-dropdown btn-primary">
         <i class="fad fa-file-signature fs-2"></i>
            {{ trans('Créer un contrat') }}
    </div>
</template>

```
*
###
![Alt text](/public/recherche_contrat.png)

*

```template
<button :disabled="searching" @click="search" class="btn btn-primary d-flex align-items-center">
    <i class="fad fa-search"></i>
    Rechercher
</button>

```
###
![Alt text](/public/renitialiser_contrat.png)

*

```template
 <div @click="resetSearch" class="btn btn-danger me-5 d-flex align-items-center">
    <i class="fad fa-trash"></i>
         Réinitialiser
</div>

```