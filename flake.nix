{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }: let
    pkgs = nixpkgs.legacyPackages.aarch64-darwin;
    in{

    devShells.aarch64-darwin.default = pkgs.mkShell {
      buildInputs = [ pkgs.nodejs ];

    };

  };
}
