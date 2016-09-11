let is_prime n =
    let max_d = int_of_float (floor (sqrt (float_of_int n))) in
    let rec loop d =
        if d > max_d then true
        else
            (n mod d <> 0) && loop (d+1)
    in loop 2;
