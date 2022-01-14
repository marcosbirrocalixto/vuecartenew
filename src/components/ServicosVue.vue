<template>

  <!-- Serviços -->
  <div class="section-title text-center"><br>
    <h3>Serviços que você encontra aqui:</h3>
  <br><br><br>
  <div class="container">
      <div class="row blog">
        <div class="col-md-12">
          <div id="blogCarousel" class="carousel slide container-blog" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#blogCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#blogCarousel" data-slide-to="1"></li>
            </ol>
            <!-- Carousel items -->
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row">
                  <div class="col-md-4" >
                    <div class="item-box-blog">
                      <div class="item-box-blog-image">
                        <!--Image-->
                        <figure> <img alt="" src="static/images/seo_01.png"> </figure>
                      </div>
                      <div class="item-box-blog-body">
                        <div class="item-box-blog-text">
                          <p>O arquiteto e urbanista é o profissional certo para transformar as suas necessidades e desejos em soluções espaciais, na hora de construir ou reformar o seu imóvel. Clique para contatar os melhores arquitetos!</p>
                        </div>
                        <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">Leia mais</a> </div>
                        <!--Read More Button-->
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4" >
                    <div class="item-box-blog">
                      <div class="item-box-blog-image">
                        <!--Image-->
                        <figure> <img alt="" src="static/images/seo_02.png"> </figure>
                      </div>
                      <div class="item-box-blog-body">
                        <!--Heading-->
                        <!--Text-->
                        <div class="item-box-blog-text">
                          <p>O projeto estrutural é responsável pela segurança da edificação, através dele se faz o dimensionamento da estrutura que a sustenta (vigas, lajes e pilares), o que evita desmoronamento, trincas, queda de revestimentos e afundamento de piso!</p>
                        </div>
                        <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">Leia mais</a> </div>
                        <!--Read More Button-->
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4" >
                    <div class="item-box-blog">
                      <div class="item-box-blog-image">
                        <!--Image-->
                        <figure> <img alt="" src="static/images/seo_03.png"> </figure>
                      </div>
                      <div class="item-box-blog-body">
                        <!--Heading-->
                        <!--Text-->
                        <div class="item-box-blog-text">
                          <p>O projeto elétrico planeja toda a fiação elétrica e futuras instalações na residência. Seja para a reforma ou construção exija sempre o projeto elétrico para garantir a sua segurança e evitar futuros problemas com a estrutura da sua residência.</p>
                        </div>
                        <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">Leia mais</a> </div>
                        <!--Read More Button-->
                      </div>
                    </div>
                  </div>
                </div>
                <!--.row-->
              </div>
              <!--.item-->
              <div class="carousel-item ">
                <div class="row">
                  <div class="col-md-4" >
                    <div class="item-box-blog">
                      <div class="item-box-blog-image">
                        <!--Image-->
                        <figure> <img alt="" src="static/images/seo_04.png"> </figure>
                      </div>
                      <div class="item-box-blog-body">
                        <!--Heading-->
                        <!--Text-->
                        <div class="item-box-blog-text">
                          <p>O projeto hidrossanitário é necessário em todas as construções, pois é por meio dele que são especificados todos os fluxos de água fluvial, água fria e quente, esgoto e água de reuso que percorrem a edificação.</p>
                        </div>
                        <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">Leia mais</a> </div>
                        <!--Read More Button-->
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4" >
                    <div class="item-box-blog">
                      <div class="item-box-blog-image">
                        <!--Image-->
                        <figure> <img alt="" src="static/images/seo_05.png"> </figure>
                      </div>
                      <div class="item-box-blog-body">
                        <!--Heading-->
                        <!--Text-->
                        <div class="item-box-blog-text">
                          <p>A importância da decoração vai além da estética. Um bom projeto de design de interiores deve melhorar a qualidade de vida do morador.</p>
                        </div>
                        <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">Leia mais</a> </div>
                        <!--Read More Button-->
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4" >
                    <div class="item-box-blog">
                      <div class="item-box-blog-image">
                        <!--Image-->
                        <figure> <img alt="" src="static/images/seo_06.png"> </figure>
                      </div>
                      <div class="item-box-blog-body">
                        <!--Heading-->
                        <!--Text-->
                        <div class="item-box-blog-text">
                          <p>Não importa se você vai construir ou reformar, somente aqui você encontrará os melhores profissionais para realizar o seu projeto!</p>
                        </div>
                         <div class="mt"> <a href="#" tabindex="0" class="btn bg-blue-ui white read">Leia mais</a> </div>
                        <!--Read More Button-->
                      </div>
                    </div>
                  </div>
                </div>
                <!--.row-->
              </div>
              <!--.item-->
            </div>
            <!--.carousel-inner-->
          </div>
          <!--.Carousel-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'ServicosVue',
  props: [],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>