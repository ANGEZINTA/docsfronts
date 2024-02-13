# Branches
Ce volet nous offre la possibilité de créer, modifier des catégories d'assurances et de créer des branches pour la configuration.

*

![Alt text](/public/branches.png)

*


![Alt text](/public/creer_branches.png)

*

```template

     <div @click="resetBranch" class="btn-sm btn btn-primary ms-5"
                 v-b-modal.branchModal>
              <i class="fad fa-plus"></i>
              {{ trans('Create_Branch') }}
            </div>

```

*


![Alt text](/public/creer_categorie.png)

*

```template

    
<div @click="resetCategory" class="btn-sm btn btn-danger"
        v-b-modal.categoryModal>
    <i class="fad fa-plus"></i>
    {{ trans('Create_Category') }}
</div>
```

*


![Alt text](/public/modifier_categorie.png)

*

```template

 <div @click="editCategory" class="btn-sm btn btn-warning me-5"
        v-b-modal.categoryModal v-if="currentCategory">
    <i class="fad fa-edit"></i>
    {{ trans('Modifier la catégorie') }}
</div>
```