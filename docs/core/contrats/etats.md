# Etats
Cette section présente l'état des diverses opérations réalisées et offre la possibilité de les télécharger.

*

![Alt text](/public/etats.png)

###
*


![Alt text](/public/telecharger_etat.png)

*

```template

<div class="d-flex justify-content-end  mb-5">
     <button :disabled="loadingEmission" class="btn btn-primary d-flex align-items-center">
         <b-spinner label="Spinning" class="me-2" v-if="loadingEmission"></b-spinner>
            <download-excel :data="emissions" :fields="emissionData"
                :worksheet="'Emissions_'+readable(interval.start,'dMy')+'_au_'+readable(interval.end,'dMy')"
                :name="'Emissions_'+readable(interval.start,'dMy')+'_au_'+readable(interval.end,'dMy')+'.xls'">
                    Télécharger
            </download-excel>
    </button>
 </div>


```