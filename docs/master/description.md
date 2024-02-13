# Le typage de données

c'est la manière dont les données sont catégorisées et interprétées dans un système.
Ici, nous aurons la possibilité de créer et de générer ces types de données.

*
![Alt text](/public/typages_donnees.png)

*

![Alt text](/public/creer_typages_de_donnéés.png)

*

```template
   <div @click="resetDataType" class="btn-sm btn btn-primary ms-5"
                 v-b-modal.dataTypeModal>
              <i class="fad fa-plus"></i>
              {{ trans('Creér un type de donnée') }}
    </div>
```
*

![Alt text](/public/generer.png)

*

```template
   <div @click="generate" class="btn-sm btn btn-danger ms-5">
              <i class="fad fa-cogs"></i>
              {{ trans('Générer') }}
    </div>
```




