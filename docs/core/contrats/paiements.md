# Paiement
On peut verifirer ici les differents paiements effectuer, rechercher et telecharger.

![Alt text](/public/paiement.png)

##

![Alt text](/public/telecharger_paiement.png)

*
```template
<button class="btn btn-icon btn-sm btn-info ms-1" @click="printReceipts" v-if="search.start && search.end">
                <i class="fad fa-print"></i>
</button>

```
*

![Alt text](/public/recherche_paiement.png)

*

```template
<button class="btn btn-icon btn-sm btn-primary" @click="load">
                <i class="fad fa-search"></i>
</button>

```
