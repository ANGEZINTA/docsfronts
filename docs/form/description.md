# Extracteur

Ici, nous pourrons modifier les informations sur les véhicules enregistrés et les télécharger sous forme de fichiers Excel.

*

![Alt text](/public/extracteur.png)

*

![Alt text](/public/telecharger_extracteur.png)

*
```template
<div>
    <download-excel :data="cars" :fields="fields" class="btn btn-primary btn-sm"
        style="margin:20px auto">
        Télécharger excel
    </download-excel>
</div>

```
*

![Alt text](/public/extracteur_changer_informations_vehicules.png)

```template

<div class="btn btn-primary btn-sm m-2" @click="loadCars">
    Charger les informations des <template v-if="maxCar > 0">{{ maxCar }}</template> véhicules
</div>

```