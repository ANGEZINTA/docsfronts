# comparateur

Il permet aux consommateurs de comparer rapidement et facilement les offres d'assurance disponibles sur le marché. 

*

![Alt text](/public/comparateur.png)

###
*
![Alt text](/public/type_comporateur_assurance.png)

*

```template
 <div class=" d-flex d-flex justify-content-center  px-10">
          <label :key="cat.uuid" class="flex-grow-1" v-for="cat in categories">
            <input :checked="current.uuid === cat.uuid" :value="cat.uuid" @change="setCurrent(cat)"
                   class="branch-category hidden" name="branch-category" type="radio">
            <div class="flex-grow-1 text-center min-w-100px nbutton fs-2 p-5 m-2">
              {{ cat.label }}
            </div>
          </label>
        </div>

```