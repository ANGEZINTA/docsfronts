# Clients
on creer ici un client et on l'enregistre,rechercher et renitialiser

![Alt text](/public/client.png)

*

###

![Alt text](/public/creer_client.png)

*

```template
<template v-slot:button-content>
     <div class="btn btn-sm btn-clean btn-dropdown btn-primary">
         <i class="fad fa-file-signature fs-2"></i>
            {{ trans('Créer un client') }}
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
*
###
![Alt text](/public/renitialiser_contrat.png)

*

```template
 <div @click="resetSearch" class="btn btn-danger me-5 d-flex align-items-center">
    <i class="fad fa-trash"></i>
         Réinitialiser
</div>

```