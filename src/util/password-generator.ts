export class PasswordGenerator {    
    private static readonly alphanum = "0123456789abcdefghijklmnopqrstuvwxyz";
    
    /** Generates a pseudo random password.
     * @param length The length of the generated password.
     */
    static generate(length: number = 7): string {
        if(length <= 0) return "";
        let res = "";
        while(res.length < length) 
            res += this.alphanum[Math.floor(Math.random() * this.alphanum.length)];
        return res;
    }
}