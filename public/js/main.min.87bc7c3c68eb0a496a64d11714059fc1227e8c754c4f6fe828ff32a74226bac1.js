(function($){'use strict';$(function(){$('[data-toggle="tooltip"]').tooltip();$('[data-toggle="popover"]').popover();$('.popover-dismiss').popover({trigger:'focus'})});function bottomPos(element){return element.offset().top+element.outerHeight();}
$(function(){var promo=$(".js-td-cover");if(!promo.length){return}
var promoOffset=bottomPos(promo);var navbarOffset=$('.js-navbar-scroll').offset().top;var threshold=Math.ceil($('.js-navbar-scroll').outerHeight());if((promoOffset-navbarOffset)<threshold){$('.js-navbar-scroll').addClass('navbar-bg-onscroll');}
$(window).on('scroll',function(){var navtop=$('.js-navbar-scroll').offset().top-$(window).scrollTop();var promoOffset=bottomPos($('.js-td-cover'));var navbarOffset=$('.js-navbar-scroll').offset().top;if((promoOffset-navbarOffset)<threshold){$('.js-navbar-scroll').addClass('navbar-bg-onscroll');}else{$('.js-navbar-scroll').removeClass('navbar-bg-onscroll');$('.js-navbar-scroll').addClass('navbar-bg-onscroll--fade');}});});}(jQuery));;(function($){'use strict';$(function(){var article=document.getElementsByTagName('main')[0];if(!article){return;}
var headings=article.querySelectorAll('h1, h2, h3, h4, h5, h6');headings.forEach(function(heading){if(heading.id){var a=document.createElement('a');a.style.visibility='hidden';a.setAttribute('aria-hidden','true');a.innerHTML=' <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>';a.href='#'+heading.id;heading.insertAdjacentElement('beforeend',a);heading.addEventListener('mouseenter',function(){a.style.visibility='initial';});heading.addEventListener('mouseleave',function(){a.style.visibility='hidden';});}});});}(jQuery));;let lunrIndex
let lunrResult
let pagesIndex
const bigramTokeniser=(obj,metadata)=>{if(obj==null||obj===undefined){return[]}
let str=obj.toString().trim().toLowerCase()
let tokens=[]
for(let i=0;i<=str.length-2;i++){const tokenMetadata=lunr.utils.clone(metadata)||{}
tokenMetadata['position']=[i,i+2]
tokenMetadata['index']=tokens.length
tokens.push(new lunr.Token(str.slice(i,i+2),tokenMetadata))}
return tokens}
const queryNgramSeparator=(query)=>{const str=query.toString().trim().toLowerCase()
const tokens=[]
for(let i=0;i<=str.length-2;i++){tokens.push(str.slice(i,i+2))}
return tokens.join(' ')}
const initLunr=()=>{$.getJSON('index.json').done((index)=>{pagesIndex=index
lunrIndex=lunr(builder=>{builder.tokenizer=bigramTokeniser
builder.pipeline.reset()
builder.ref('ref')
builder.field('title',{boost:10})
builder.field('tags',{boost:10})
builder.field('body')
builder.metadataWhitelist=['position']
for(let page of pagesIndex){builder.add(page)}})}).fail((jqxhr,textStatus,error)=>{const err=textStatus+', '+error
console.error('Error getting Hugo index flie:',err)})}
const search=(query)=>{lunrResult=lunrIndex.search(queryNgramSeparator(query))
return lunrResult.map((result)=>{return pagesIndex.filter((page)=>{return page.ref===result.ref})[0]})}
const initUI=()=>{$('#searchBoxIcon').click(()=>{$('#searchBoxInput').val('')
$('#searchBoxInput').trigger('keyup')
$('#searchBoxInput').focus()})
$('#searchBoxInput').keyup(event=>{const $searchResults=$('#searchResults')
const query=$(event.currentTarget).val()
const iconUrl=$('#searchBoxIcon').attr('src')
if(query.length){$('#searchBoxIcon').attr('src',iconUrl.replace('search.png','clear.png'))
$('#searchBoxIcon').css('cursor','pointer')}else{$('#searchBoxIcon').attr('src',iconUrl.replace('clear.png','search.png'))
$('#searchBoxIcon').css('cursor','default')}
if(query.length<2){$searchResults.hide()
return}
renderResults(search(query))
$searchResults.show()})
$('#searchBoxInput').trigger('keyup')
$('#searchBoxInput').focus()}
const renderResults=(results)=>{const $searchResults=$('#searchResults')
const query=$('#searchBoxInput').val()
const BODY_LENGTH=100
const MAX_PAGES=10
$searchResults.empty()
if(!results.length){$searchResults.append('<div class="searchResultPage">No results found for query "'+query+'"</div>')
return}
results.slice(0,MAX_PAGES).forEach((result,idx)=>{const $searchResultPage=$('<div class="searchResultPage">')
const metadata=lunrResult[idx].matchData.metadata
const matchPosition=metadata[Object.keys(metadata)[0]].body?metadata[Object.keys(metadata)[0]].body.position[0][0]:0
const bodyStartPosition=(matchPosition-(BODY_LENGTH/2)>0)?matchPosition-(BODY_LENGTH/2):0
$searchResultPage.append('<a class="searchResultTitle" href="'+result.ref+'">'+result.title+'</a>')
$searchResultPage.append('<div class="searchResultBody">'+result.body.substr(bodyStartPosition,BODY_LENGTH)+'</div>')
$searchResults.append($searchResultPage)
$('#searchResults').mark(query)})}
initLunr()
$(()=>{initUI()})