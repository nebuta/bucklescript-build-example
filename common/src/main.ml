(* Function from: http://stackoverflow.com/questions/243864/what-is-the-ocaml-idiom-equivalent-to-pythons-range-function *)
let (--) i j = 
    let rec aux n acc =
      if n < i then acc else aux (n-1) (n :: acc)
    in aux j [] ;;

let () =
    let primes = List.filter Prime.is_prime (2--50) in
    let result = String.concat ", " (List.map string_of_int primes) in
    print_endline "Finding prime numbers.";
    print_endline result;
