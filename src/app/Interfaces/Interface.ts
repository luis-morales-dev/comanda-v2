
export interface RestLogin {
    code: number;
    name: string;
    message: string;
    data: Usuario;
    type: string;
}

export interface Usuario {
    token?:       string;
    email?:       string;
    username?:    string;
    nombre?:      string;
    apellidos?:   string;
    sexo?:        string;
    telefono?:    string;
    pertenece_a?: number;
    is_vendedor?: null;
}

export interface Respuesta {
    code:    number;
    name:    string;
    message: string;
    folio?:  number;
    type:    string;
}
// Generated by https://quicktype.io

export interface RestVendedor {
    code:       number;
    name:       string;
    vendedores: Vendedor[];
    type:       string;
}

export interface Vendedor {
    token:       string;
    email:       string;
    username:    string;
    nombre:      string;
    apellidos:   string;
    sexo:        null;
    pertenece_a: number;
    telefono:    string;
}

// Generated by https://quicktype.io

export interface RestCliente {
    code:     number;
    name:     string;
    clientes: Cliente[];
    cliente?: Cliente;
    message: string;
    type:     string;
}

export interface Cliente {
    id:             string;
    text:           string;
    nombre:         string;
    apellidos:      null | string;
    email:          null | string;
    telefono:       null | string;
    telefono_movil: null | string;
}

// Generated by https://quicktype.io

export interface RestProducto {
    code:     number;
    name:     string;
    producto: Producto[];
    type:     string;
}

export interface Producto {
    id?:                       string;
    clave?:                    string;
    avatar?:                   null;
    nombre?:                   string;
    text?:                     string;
    descripcion?:              null | string;
    is_subproducto?:           string;
    sub_cantidad_equivalente?: null;
    sub_producto_id?:          null;
    sub_producto_nombre?:      null;
    sub_existencia?:           number;
    tipo?:                     string;
    existencia?:               number;
    tipo_medida?:              string;
    categoria?:                string;
    proveedor?:                null;
    costo?:                    number;
    precio_publico?:           number;
    precio_mayoreo?:           number;
    precio_menudeo?:           number;
    precio_venta?:             number;
    tipo_venta?:               number;
    cantidad?:                 number;
    sub_total?:                number;
}


export interface IntComanda{
    comanda?:        number;
    token?:          string;
    tipo?:           number;
    nom_vendedor?:   string;
    cliente?:        string;
    Total?:          null | number;
    productos?:      Producto[],
    cliente_id?:     null | number;
}

