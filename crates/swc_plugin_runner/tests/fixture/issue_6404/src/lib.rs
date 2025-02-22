use swc_core::{
    common::{BytePos, SourceMapper, Span, SyntaxContext},
    ecma::ast::*,
    plugin::{metadata::TransformPluginProgramMetadata, plugin_transform},
};

#[plugin_transform]
pub fn process_transform(program: Program, metadata: TransformPluginProgramMetadata) -> Program {
    for i in 1..50000 {
        let j: u32 = i;
        println!("i {} j {}", i, j);
        let res = metadata.source_map.span_to_snippet(Span::new(
            BytePos(j),
            BytePos(j + 1000),
            SyntaxContext::empty(),
        ));
        let _ = dbg!(res);
    }

    program
}
