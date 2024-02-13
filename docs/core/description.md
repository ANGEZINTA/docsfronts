# Cotation
C'est le  processus par lequel l'assureur évalue le risque d'un client et fournit une estimation du coût de la couverture d'assurance appropriée.

Ici, nous effectuons les cotations une fois une affaire validée. Vous pouvez obtenir des informations détaillées sur la cotation ou la supprimer.

*

![Alt text](/public/cotation.png)

*



###

![Alt text](/public/creer_cotation.png)

```template


  <div class="d-flex align-items-center py-1">
                    <router-link target="_blank" :to="{name : 'comparateur-index'}" class="btn btn-sm btn-clean btn-dropdown btn-primary">
                                <i class="fad fa-file-signature fs-2"></i>
                                {{ trans('Effectuer une cotation') }}
                    </router-link>
 </div>
```
*
###

![Alt text](/public/supprimer_cotation.png)


```bootstrap

 <button type="button" class="btn btn-sm btn-icon btn-secondary">
                    <i class="fad fa-coins"></i>
    </button>

```
*
![Alt text](/public/info_cotation.png)

###

```bootstrap
  <button type="button" class="btn btn-sm btn-icon btn-secondary">
                    <i class="fad fa-th-list"></i>
  </button>
```
*
![Alt text](/public/visibilité_cotation.png)

###

```bootstrap
<button type="button" class="btn btn-sm btn-icon btn-secondary">
                    <i class="fad fa-abacus"></i>
</button>
```






