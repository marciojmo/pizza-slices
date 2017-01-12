// pizza price on wednesdays
var WEDNESDAY_PRICE = 20.00;
// price of delivery
var DELIVERY_PRICE = 8;
// number of slices per pizza
var SLICES_PER_PIZZA = 8;
// maximum number of pizzas per delivery
var MAX_PIZZAS_PER_DELIVERY = 6;


var overviewSummary = {
  "pizzas": {},
  "pizzaCosts": 0,
  "deliveryCosts": 8,
  "totalCosts": 0,
  // Recalculates the total price for the user
  updateTotals: function(wednesday = true)
  {
    // for every pizza in menu, adds it to the summary
    for (var pizza in menu) 
      overviewSummary['pizzas'][ pizza ] = 0;
    
    // for every user ordering pizzas, increments the summary pizza slices count
    for (var user in orders['users'])
      for (var pizza in orders['users'][user]['pizzas'] )
        overviewSummary['pizzas'][ pizza ] += orders['users'][user]['pizzas'][pizza];
    
    // calculates the pizza costs and delivery costs
    var totalPizzasToDeliver = 0;
    overviewSummary["pizzaCosts"] = 0;
    for (pizza in overviewSummary["pizzas"])
    {
      var numberOfCompletePizzas = Math.ceil( overviewSummary['pizzas'][pizza] / SLICES_PER_PIZZA );
      var pizzaPrice = wednesday ? WEDNESDAY_PRICE : menu[pizza].price;
      overviewSummary["pizzaCosts"] += numberOfCompletePizzas * pizzaPrice;
      totalPizzasToDeliver += numberOfCompletePizzas;
    }

    // calculates the delivery costs
    overviewSummary['deliveryCosts'] = Math.ceil( totalPizzasToDeliver / MAX_PIZZAS_PER_DELIVERY ) * DELIVERY_PRICE;
    
    // calculates the total costs
    overviewSummary['totalCosts'] = overviewSummary['pizzaCosts'] + overviewSummary['deliveryCosts'];
  }
};
// Indicates the user selecting pizzas
var modalSelectionUser = null;
// Tio Tomate's menu
var menu = {
  'Napolitana':
  {
    description: 'molho especial da casa, mussarela, parmesão, tomate fresco, azeitona e orégano',
    price: 20.00,
    image: "img/napolitana.jpg",
  },
  'Palmito':
  {
    description: 'molho especial da casa, palmito, mussarela, tomate fresco, azeitona e orégano',
    price: 25.00,
    image: "img/palmito.jpg",
  },
  'Palmito com catupiry':
  {
    description: 'molho especial da casa, mussarela, pepperoni, cebola, parmesão, azeitona e orégano',
    price: 30.00,
    image: "img/palmito-catupiry.jpg",
  },
  'Pepperoni':
  {
    description: 'molho especial da casa, mussarela, pepperoni, cebola, parmesão, azeitona e orégano',
    price: 30.00,
    image: "img/pepperoni.jpg",
  },
  'Peru com Cheddar':
  {
    description: 'molho especial da casa, mussarela, peito de peru, cheddar, azeitona e orégano',
    price: 25.00,
    image: "img/peru-cheddar.jpg",
  },
  'Portuguesa':
  {
    description: 'molho especial da casa, mussarela, presunto, ovo, cebola, ervilha, azeitona e orégano',
    price: 25.00,
    image: "img/portuguesa.jpg",
  },
  'Quatro Queijos':
  {
    description: 'molho especial da casa, mussarela, catupiry, provolone, parmesão, azeitona e orégano',
    price: 30.00,
    image: "img/quatro-queijos.jpg",
  },
  'Salame':
  {
    description: 'molho especial da casa, mussarela, salame, parmesão, tomate fresco, azeitona e orégano',
    price: 25.00,
    image: "img/salame.jpg",
  },
  'Salame com catupiry':
  {
    description: 'molho especial da casa, mussarela, salame, catupiry, parmesão, azeitona e orégano',
    price: 30.00,
    image: "img/salame-catupiry.jpg",
  },
  'Tio Tomate':
  {
    description: 'molho especial da casa, mussarela, frango desfiado, presunto, calabresa, tomate fresco, azeitona e orégano',
    price: 30.00,
    image: "img/tio-tomate.jpg",
  },
  'Tomate Seco':
  {
    description: 'molho especial da casa, mussarela, tomate seco, parmesão, azeitona e orégano',
    price: 30.00,
    image: "img/tomate-seco.jpg",
  },
  'Adventista':
  {
    description: 'molho especial da casa, mussarela, palmito, ervilha, milho verde, tomate fresco, azeitona e orégano',
    price: 30.00,
    image: "img/adventista.jpg",
  },
  'Alho e Oleo':
  {
    description: 'molho especial da casa, mussarela, alho frito, parmesão, manjericão, azeitona e orégano',
    price: 25.00,
    image: "img/alho-oleo.jpg",
  },
  'Atum':
  {
    description: 'molho especial da casa, mussarela, atum, cebola, tomate fresco, azeitona e orégano',
    price: 30.00,
    image: "img/atum.jpg",
  },
  'Atum Nobre':
  {
    description: 'molho especial da casa, atum, tomate fresco, ervilha, requeijão, azeitona e orégano, mussarela',
    price: 30.00,
    image: "img/atum-nobre.jpg",
  },
  'Bacon':
  {
    description: 'molho especial da casa, mussarela, bacon, cebola, tomate fresco, azeitona e orégano',
    price: 25.00,
    image: "img/bacon.jpg",
  },
  'Bauru':
  {
    description: 'molho especial da casa, mussarela, presunto, tomate fresco, azeitona e orégano',
    price: 25.00,
    image: "img/bauru.jpg",
  },
  'Bauru Nobre':
  {
    description: 'molho especial da casa, presunto, requeijão, tomate fresco, azeitona e orégano, mussarela',
    price: 25.00,
    image: "img/bauru-nobre.jpg",
  },
  'Brasileira':
  {
    description: 'molho especial da casa, mussarela, presunto, ovo, cebola, ervilha, palmito, azeitona e orégano',
    price: 25.00,
    image: "img/brasileira.jpg",
  },
  'Caipira':
  {
    description: 'molho especial da casa, mussarela, frango desfiado, milho verde, azeitona e orégano',
    price: 25.00,
    image: "img/caipira.jpg",
  },
  'Marguerita':
  {
    description: 'molho especial da casa, mussarela, parmesão, manjericão, azeitona e orégano',
    price: 25.00,
    image: "img/marguerita.jpg",
  },
  'Mexicana':
  {
    description: 'molho especial da casa, mussarela, bacon, ervilha, cebola, alho frito, azeitona e orégano',
    price: 25.00,
    image: "img/mexicana.jpg",
  },
  'Mussarela':
  {
    description: 'molho especial da casa, mussarela, tomate fresco, azeitona e orégano',
    price: 20.00,
    image: "img/mussarela.jpg",
  },
  'Calabresa':
  {
    description: 'molho especial da casa, mussarela, calabresa, cebola, azeitona e orégano',
    price: 25.00,
    image: "img/calabresa.jpg",
  },
  'Calabresa com Catupiry':
  {
    description: 'molho especial da casa, tomate fresco, catupiry, azeitona e orégano, mussarela',
    price: 25.00,
    image: "img/calabresa-catupiry.jpg",
  },
  'Calabresa Nobre':
  {
    description: 'molho especial da casa, calabresa, requeijão, cebola, tomate fresco, azeitona e orégano, mussarela',
    price: 25.00,
    image: "img/calabresa-nobre.jpg",
  },
  'Carijo':
  {
    description: 'molho especial da casa, mussarela, frango desfiado, milho verde, cebola, bacon, azeitona e orégano',
    price: 30.00,
    image: "img/carijo.jpg",
  },
  'Carne de Sol':
  {
    description: 'molho especial da casa, mussarela, carne de sol desfiada, cebola, azeitona e orégano',
    price: 30.00,
    image: "img/carne-sol.jpg",
  },
  'Dois Queijos':
  {
    description: 'molho especial da casa, mussarela, catupiry, azeitona e orégano',
    price: 30.00,
    image: "img/dois-queijos.jpg",
  },
  'Florença':
  {
    description: 'molho especial da casa, mussarela, lombo, frango, cebola, catupiry, azeitona e orégano',
    price: 30.00,
    image: "img/florenca.jpg",
  },
  'Frango com Catupiry':
  {
    description: 'molho especial da casa, frango, catupiry, tomate fresco, azeitona e orégano, mussarela',
    price: 30.00,
    image: "img/frango-catupiry.jpg",
  },
  'Frango com Mussarela':
  {
    description: 'molho especial da casa, frango, mussarela, tomate fresco, azeitona e orégano',
    price: 25.00,
    image: "img/frango-mussarela.jpg",
  },
  'Hot Dog':
  {
    description: 'molho especial da casa, mussarela, salsicha, catchup, maionese, batata palha, azeitona e orégano',
    price: 25.00,
    image: "img/hot-dog.jpg",
  },
  'Lombinho':
  {
    description: 'molho especial da casa, mussarela, lombo, cebola, azeitona e orégano',
    price: 25.00,
  },
  'Lombinho com Catupiry':
  {
    description: 'molho especial da casa, mussarela, lombo, catupiry, azeitona e orégano',
    price: 25.00,
    image: "img/lombinho-catupiry.jpg",
  },
};

// The list of people in the lab who orders pizzas
var users = ["Márcio", "Petterson", "Artur", "João", "Alexandre",
  "Daniel LAWS", "Polyana", "Roberto", "Sidney", "Daniela",
  "Thales", "Nigel", "Ruy", "Gabriel UNREAL", "Gabriel Guri",
  "André", "Anselmo","Jordan","Lisle","Jefferson","Kelson", "Geraldo",
];

var orders = {
  'users': {},
  
  // Adds a user to the orders list
  addUser: function ( username )
  {
    // adds the user to the orders
    orders['users'][username] = {
      'total': 0,
      'pizzas': {},
    };
    // initializes all slices to 0
    for (var pizza in menu)
      orders['users'][username]['pizzas'][pizza] = 0;
  },
  
  // Removes the user from the orders list
  removeUser: function ( username )
  {
    delete orders['users'][username];
  },
  
  // Increments the number of slices of the given pizza for the user
  incrementSlices: function ( username, pizza )
  {
    orders['users'][username]['pizzas'][pizza]++;
  },
  // Increments the number of slices of the given pizza for the user
  decrementSlices: function ( username, pizza )
  {
    if (orders['users'][username]['pizzas'][pizza] > 0)
      orders['users'][username]['pizzas'][pizza]--;
  },
  // Recalculates the total price for the user
  updateTotals: function ( wednesday = true )
  {
    for ( username in orders['users'] )
    {
      // updates the pizza costs
      orders['users'][username]['pizzaCosts'] = 0;
      for ( pizza in orders['users'][username]['pizzas'] )
      {
        var sliceCount = orders['users'][username]['pizzas'][pizza];
        var pizzaPrice = wednesday ? WEDNESDAY_PRICE : menu[pizza].price;
        var slicePrice = pizzaPrice / SLICES_PER_PIZZA;
        orders['users'][username]['pizzaCosts'] += sliceCount *slicePrice;
      }
      // updates the delivery costs
      orders['users'][username]['deliveryCosts'] = overviewSummary['deliveryCosts'] / Object.keys(orders['users']).length;
      // updates the total costs
      orders['users'][username]['totalCosts'] = orders['users'][username]['pizzaCosts'] + 
          orders['users'][username]['deliveryCosts'];
    }
  }
};

// Adds a user to the users list if enter pressed
function onEnterPressed()
{
	var username = $("#users-list").val();
	$("#users-list").val('');
	users.push(username);
	if (!(username in orders)) orders.addUser(username);
	// Clears the input field and beep
	$("#users-list").val('');
	beep();
	// open the pizza selection modal for the selected user
	choosePizzas(username);
}

// Callback for the list-group-item anchor
function onListGroupItemClicked()
{
  var username = $(this).data("user");
  choosePizzas(username);
}
// opens the selection menu for the given user
function choosePizzas(username)
{
  modalSelectionUser = username;
  // Updates the modal UI for the user
  refreshModalUI(modalSelectionUser);
  $("#modal-filter").val('');
  $("#selection-menu").modal();
}

//////////////////////
// Callbacks
//////////////////////
// callback for the remove user button on the modal
function onRemoveUserClicked()
{
  orders.removeUser(modalSelectionUser);
  $("#selection-menu").modal("hide");
}

// calback for the close modal event
function onCloseModal()
{
  overviewSummary.updateTotals();
  orders.updateTotals();
  refreshUI();
}

// callback for the decrement slice click
function onDecrementSlicesClicked()
{
  var username = $(this).data('user');
  var pizza = $(this).data('pizza');
  var target = $(this).data('target');
  orders.decrementSlices(username, pizza);
  $(target).html(orders['users'][ username ]['pizzas'][pizza]);
  beep();
}

// callback for the increment slice click
function onIncrementSlicesClicked()
{
  var username = $(this).data('user');
  var pizza = $(this).data('pizza');
  var target = $(this).data('target');
  orders.incrementSlices(username, pizza);
  $(target).html(orders['users'][ username ]['pizzas'][pizza]);
  beep();
}

// calback for the modal filter
// searches for pizzas that contains the filter name
function onModalFilterChange()
{
  var filter = $("#modal-filter").val();
  if (filter.length == 0)
  {
    $('.pizzas-container .pizza').show();
    return;
  }
  else
  {
    $('.pizzas-container .pizza').hide();
    $('.pizzas-container .pizza').each(function()
    {
      if ( $(this).text().toUpperCase().indexOf(filter.toUpperCase()) != -1 )
        $(this).show();
    });
  }
}

// refreshes the modal UI
function refreshModalUI(username)
{
  $("#modal-user").html(modalSelectionUser);
  $(".pizzas-container").html('');
  for (pizza in orders['users'][
      username
    ]['pizzas'])
  {
    var qnt_unique_id = pizza.split(' ').join('_');
    //if ( orders['users'][username]['pizzas'][pizza] > 0 )
    //{
    $(".pizzas-container").append($("<div>").attr("class", "pizza").append(
      $("<div>").attr("class", "image").attr("title", menu[pizza]
        .description).append($("<img>").attr("src",
        menu[pizza].image))).append($("<div>").attr("class",
        "info").append($("<p>").attr("class", "name").html(pizza))
      .append($("<p>").attr("class", "remaining").append($(
        "<span>").attr("class", "qnt-less").data('user',
        username).data('pizza', pizza).data('target', '#' +
        qnt_unique_id).click(onDecrementSlicesClicked).html(
        '-')).append($("<span>").attr("class", "qnt-value").attr(
        "id", qnt_unique_id).html(orders['users'][
        username
      ]['pizzas'][pizza])).append($("<span>").attr("class",
        "qnt-more").data('user', username).data('pizza',
        pizza).data('target', '#' + qnt_unique_id).click(
        onIncrementSlicesClicked).html('+')))));
    //}
  }
}

// refreshes the main ui
function refreshUI()
{
  $(".overview-pizza-container").html('');
  // updating overview pizzas preview
  for (pizza in overviewSummary["pizzas"])
  {
    // calculates the totals for this pizza flavor
    var numberOfCompletePizzas = Math.ceil( overviewSummary['pizzas'][ pizza ] / SLICES_PER_PIZZA );
    var numberOfRemainingSlices = numberOfCompletePizzas * SLICES_PER_PIZZA - overviewSummary['pizzas'][pizza];
    for (var i = 0; i < numberOfCompletePizzas; i++)
    {
      var remainingText = "";
      if (i == numberOfCompletePizzas - 1) 
        remainingText = numberOfRemainingSlices == 0 ? "Complete" : ( numberOfRemainingSlices + " slices remaining" );
      else 
        remainingText = "Complete";
      // creates the ui element
      $(".overview-pizza-container").append($("<div>").attr("class",
        "pizza").append($("<div>").attr("class", "image").append(
        $("<img>").attr("src", menu[pizza].image))).append($(
        "<div>").attr("class", "info").append($("<p>").attr(
        "class", "name").html(pizza)).append($("<p>").attr(
        "class", "remaining").html(remainingText))));
    }
  }
  // updating overview costs
  $(".overview-pizza-costs").html( "R$ " + overviewSummary['pizzaCosts'].toFixed(2) );
  $(".overview-delivery-costs").html( "R$ " + overviewSummary['deliveryCosts'].toFixed(2) );
  $(".overview-total-costs").html( "R$ " + overviewSummary['totalCosts'].toFixed(2) );
  // updating orders list
  $(".list-group").html('');
  for (user in orders['users'])
  {
    // The header for this user (with costs)
    var listGroupItemSummary = user + ' - R$ ' + 
      orders['users'][user]['pizzaCosts'].toFixed(2) + 
      " + R$ " + orders['users'][user][ 'deliveryCosts' ].toFixed(2) + 
      " = R$ " + orders['users'][user]['totalCosts'].toFixed(2);

    // The list of pizzas for this user
    var listGroupItemPizzas = "";
    for ( pizza in orders['users'][user]['pizzas'] )
    {
      if ( orders['users'][user]['pizzas'][pizza] > 0 )
      {
        if (listGroupItemPizzas.length > 0) 
          listGroupItemPizzas += ' • ';
        listGroupItemPizzas += orders['users'][user]['pizzas'][pizza] + ' ' + pizza;
      }
    }
    // Appends the list-group-item representing this user to the list-group list.
    $(".list-group").append($("<a>").attr("href", '#').attr("class",
      "list-group-item").data("user", user).append($("<h4>").attr(
      "class", "list-group-item-heading").html(
      listGroupItemSummary)).append($("<p>").attr("class",
      "list-group-item-text").html(listGroupItemPizzas)).click(
      onListGroupItemClicked));
  }
}

// A funny beep hahaha
function beep()
{
  var snd = new Audio(
    "data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU="
  );
  snd.play();
}

$(function()
{
  // update model value and refreshes the main UI
  orders.updateTotals();
  overviewSummary.updateTotals();
  refreshUI();

  // users autocomplete
  $("#users-list").autocomplete(
  {
    source: users,
    select: function(event, ui)
    {
      // prevents the default action
      event.preventDefault();
      // Adds the user to the orders list (if not exists)
      var username = ui.item.value;
      if (!(username in orders)) orders.addUser(username);
      // Clears the input field and beep
      $("#users-list").val('');
      beep();
      // open the pizza selection modal for the selected user
      choosePizzas(username);
    }
  });

  // callbacks
  $('#users-list').keypress( function(e){
	  if(e.which == 13)
		  onEnterPressed();		
  });
  $('#modal-filter').on( 'input', onModalFilterChange );
  $(".remove-user").click( onRemoveUserClicked );
  $("#selection-menu").on( 'hide.bs.modal', onCloseModal );
});