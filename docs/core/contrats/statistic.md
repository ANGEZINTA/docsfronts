# Statistiques



Ici, nous avons accès aux données statistiques des opérations enregistrées  dans l'application.



*
![Alt text](/public/statistics.png)

*
![Alt text](/public/filtrer_statistics.png)

*
```template
     <template v-slot:button-content>
    <div class="cursor-pointer btn btn-secondary btn-sm me-3">
        <!--                    <span class="badge badge-danger me-2" v-if="count > 0">{{count}}</span>-->
        <i class="fad fa-search me-2"></i>
        <!--                    <template v-if="dateInterval">-->
        <!--                        {{readableDate($store.state.filter.dateMin,false,true,false)}} - -->
        <!--                        {{readableDate($store.state.filter.dateMax,false,true,false)}}-->
        <!--                    </template>-->
        <template>Filtrer</template>
    </div>
    </template>

```