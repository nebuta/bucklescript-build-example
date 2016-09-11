type jquery;;

external jquery : string -> jquery = "" [@@bs.module]
external attr : string -> string -> jquery = "attr" [@@bs.send.pipe: jquery]
external css : string -> string -> jquery = "css" [@@bs.send.pipe: jquery]

let set_attr () =
	let body = jquery "body" in
	let _ = body |> attr "id" "test" |> css "color" "red" in
	print_endline "Done";;

