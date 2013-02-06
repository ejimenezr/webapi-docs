task default -depends Make

task Make {
	foreach($file in ls ..\en\*\*.markdown) {
		$filename = Split-Path -Leaf $file.BaseName
		$target = "./_docs/" + $filename
		New-Item $target -type directory -force
		cp $file $target/body.markdown
		$filename >> $target/_id
		Write-Host $target
	}
}
