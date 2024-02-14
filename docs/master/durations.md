# Assureurs
C'est l'entreprise qui propose des services d'assurance.<br>
Nous enregistrons ici tous nos assureurs, nous effectuons des modifications et des suppressions, et nous créons des packs pour nos clients.<br>
Les packs sont des offres qui recouvrent plusieurs types de couvertures d'assurance.

*
![Alt text](/public/assureurs.png)

*


![Alt text](/public/creer_assureurs.png)

*

````bootstrap

<div class="d-flex align-items-center py-1" v-b-modal="'insurerForm'">
<button class="btn btn-primary btn-sm">
    <i class="fad fa-plus"></i>
    {{ trans('Créer un assureur') }}
</button>
</div>
````
*

![Alt text](/public/editer_parck.png)

*

````template
    <router-link :to="{
                        name: 'pack-form', params: {
                            insurerSlug: insurer.slug, branchSlug: pack.branchSlug,
                            packId: pack.id
                        }
                    }" class="btn btn-xs btn-icon btn-primary me-2">
    <i class="fad fa-edit"></i>
    </router-link>
````
*

![Alt text](/public/supprimer_carte.png)

*

````template
<div @click="deletePack(pack)" class="btn btn-xs btn-icon btn-danger">
<i class="fad fa-trash"></i>
</div>
````
*

![Alt text](/public/creer_parck.png)

*

````
<router-link
        :to="{ name: 'pack-form', params: { insurerSlug: insurer.slug, branchSlug: branch.slug } }"
        class="btn btn-primary btn-sm">
    <i class="fad fa-plus"></i>
    Créer un pack
</router-link>
````
