# `googleChronicleBigQueryExport` Submodule <a name="`googleChronicleBigQueryExport` Submodule" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleBigQueryExport <a name="GoogleChronicleBigQueryExport" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export google_chronicle_big_query_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExport;

GoogleChronicleBigQueryExport.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .bigQueryExportPackage(java.lang.String)
//  .entityGraphSettings(GoogleChronicleBigQueryExportEntityGraphSettings)
//  .id(java.lang.String)
//  .iocMatchesSettings(GoogleChronicleBigQueryExportIocMatchesSettings)
//  .project(java.lang.String)
//  .ruleDetectionsSettings(GoogleChronicleBigQueryExportRuleDetectionsSettings)
//  .timeouts(GoogleChronicleBigQueryExportTimeouts)
//  .udmEventsAggregatesSettings(GoogleChronicleBigQueryExportUdmEventsAggregatesSettings)
//  .udmEventsSettings(GoogleChronicleBigQueryExportUdmEventsSettings)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.bigQueryExportPackage">bigQueryExportPackage</a></code> | <code>java.lang.String</code> | The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.entityGraphSettings">entityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | entity_graph_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.iocMatchesSettings">iocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | ioc_matches_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.ruleDetectionsSettings">ruleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | rule_detections_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.udmEventsAggregatesSettings">udmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | udm_events_aggregates_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.udmEventsSettings">udmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | udm_events_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#instance GoogleChronicleBigQueryExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#location GoogleChronicleBigQueryExport#location}

---

##### `bigQueryExportPackage`<sup>Optional</sup> <a name="bigQueryExportPackage" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.bigQueryExportPackage"></a>

- *Type:* java.lang.String

The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#big_query_export_package GoogleChronicleBigQueryExport#big_query_export_package}

---

##### `entityGraphSettings`<sup>Optional</sup> <a name="entityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.entityGraphSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

entity_graph_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#entity_graph_settings GoogleChronicleBigQueryExport#entity_graph_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iocMatchesSettings`<sup>Optional</sup> <a name="iocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.iocMatchesSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

ioc_matches_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#ioc_matches_settings GoogleChronicleBigQueryExport#ioc_matches_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}.

---

##### `ruleDetectionsSettings`<sup>Optional</sup> <a name="ruleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.ruleDetectionsSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

rule_detections_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#rule_detections_settings GoogleChronicleBigQueryExport#rule_detections_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#timeouts GoogleChronicleBigQueryExport#timeouts}

---

##### `udmEventsAggregatesSettings`<sup>Optional</sup> <a name="udmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.udmEventsAggregatesSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

udm_events_aggregates_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#udm_events_aggregates_settings GoogleChronicleBigQueryExport#udm_events_aggregates_settings}

---

##### `udmEventsSettings`<sup>Optional</sup> <a name="udmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.Initializer.parameter.udmEventsSettings"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

udm_events_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#udm_events_settings GoogleChronicleBigQueryExport#udm_events_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings">putEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings">putIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings">putRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings">putUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings">putUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetBigQueryExportPackage">resetBigQueryExportPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetEntityGraphSettings">resetEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetIocMatchesSettings">resetIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetRuleDetectionsSettings">resetRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsAggregatesSettings">resetUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsSettings">resetUdmEventsSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntityGraphSettings` <a name="putEntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings"></a>

```java
public void putEntityGraphSettings(GoogleChronicleBigQueryExportEntityGraphSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putEntityGraphSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---

##### `putIocMatchesSettings` <a name="putIocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings"></a>

```java
public void putIocMatchesSettings(GoogleChronicleBigQueryExportIocMatchesSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putIocMatchesSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---

##### `putRuleDetectionsSettings` <a name="putRuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings"></a>

```java
public void putRuleDetectionsSettings(GoogleChronicleBigQueryExportRuleDetectionsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putRuleDetectionsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts"></a>

```java
public void putTimeouts(GoogleChronicleBigQueryExportTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---

##### `putUdmEventsAggregatesSettings` <a name="putUdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings"></a>

```java
public void putUdmEventsAggregatesSettings(GoogleChronicleBigQueryExportUdmEventsAggregatesSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsAggregatesSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `putUdmEventsSettings` <a name="putUdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings"></a>

```java
public void putUdmEventsSettings(GoogleChronicleBigQueryExportUdmEventsSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.putUdmEventsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---

##### `resetBigQueryExportPackage` <a name="resetBigQueryExportPackage" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetBigQueryExportPackage"></a>

```java
public void resetBigQueryExportPackage()
```

##### `resetEntityGraphSettings` <a name="resetEntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetEntityGraphSettings"></a>

```java
public void resetEntityGraphSettings()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetId"></a>

```java
public void resetId()
```

##### `resetIocMatchesSettings` <a name="resetIocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetIocMatchesSettings"></a>

```java
public void resetIocMatchesSettings()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetProject"></a>

```java
public void resetProject()
```

##### `resetRuleDetectionsSettings` <a name="resetRuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetRuleDetectionsSettings"></a>

```java
public void resetRuleDetectionsSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUdmEventsAggregatesSettings` <a name="resetUdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsAggregatesSettings"></a>

```java
public void resetUdmEventsAggregatesSettings()
```

##### `resetUdmEventsSettings` <a name="resetUdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.resetUdmEventsSettings"></a>

```java
public void resetUdmEventsSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleBigQueryExport resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExport;

GoogleChronicleBigQueryExport.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExport;

GoogleChronicleBigQueryExport.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExport;

GoogleChronicleBigQueryExport.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExport;

GoogleChronicleBigQueryExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleChronicleBigQueryExport.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleChronicleBigQueryExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleChronicleBigQueryExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleChronicleBigQueryExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleBigQueryExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettings">entityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference">GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettings">iocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference">GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioned">provisioned</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettings">ruleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference">GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference">GoogleChronicleBigQueryExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettings">udmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettings">udmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackageInput">bigQueryExportPackageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettingsInput">entityGraphSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettingsInput">iocMatchesSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettingsInput">ruleDetectionsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput">udmEventsAggregatesSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettingsInput">udmEventsSettingsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackage">bigQueryExportPackage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `entityGraphSettings`<sup>Required</sup> <a name="entityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettings"></a>

```java
public GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference getEntityGraphSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference">GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference</a>

---

##### `iocMatchesSettings`<sup>Required</sup> <a name="iocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettings"></a>

```java
public GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference getIocMatchesSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference">GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `provisioned`<sup>Required</sup> <a name="provisioned" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.provisioned"></a>

```java
public IResolvable getProvisioned();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `ruleDetectionsSettings`<sup>Required</sup> <a name="ruleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettings"></a>

```java
public GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference getRuleDetectionsSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference">GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeouts"></a>

```java
public GoogleChronicleBigQueryExportTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference">GoogleChronicleBigQueryExportTimeoutsOutputReference</a>

---

##### `udmEventsAggregatesSettings`<sup>Required</sup> <a name="udmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettings"></a>

```java
public GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference getUdmEventsAggregatesSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference</a>

---

##### `udmEventsSettings`<sup>Required</sup> <a name="udmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettings"></a>

```java
public GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference getUdmEventsSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference">GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference</a>

---

##### `bigQueryExportPackageInput`<sup>Optional</sup> <a name="bigQueryExportPackageInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackageInput"></a>

```java
public java.lang.String getBigQueryExportPackageInput();
```

- *Type:* java.lang.String

---

##### `entityGraphSettingsInput`<sup>Optional</sup> <a name="entityGraphSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.entityGraphSettingsInput"></a>

```java
public GoogleChronicleBigQueryExportEntityGraphSettings getEntityGraphSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `iocMatchesSettingsInput`<sup>Optional</sup> <a name="iocMatchesSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.iocMatchesSettingsInput"></a>

```java
public GoogleChronicleBigQueryExportIocMatchesSettings getIocMatchesSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `ruleDetectionsSettingsInput`<sup>Optional</sup> <a name="ruleDetectionsSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.ruleDetectionsSettingsInput"></a>

```java
public GoogleChronicleBigQueryExportRuleDetectionsSettings getRuleDetectionsSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.timeoutsInput"></a>

```java
public IResolvable|GoogleChronicleBigQueryExportTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---

##### `udmEventsAggregatesSettingsInput`<sup>Optional</sup> <a name="udmEventsAggregatesSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsAggregatesSettingsInput"></a>

```java
public GoogleChronicleBigQueryExportUdmEventsAggregatesSettings getUdmEventsAggregatesSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---

##### `udmEventsSettingsInput`<sup>Optional</sup> <a name="udmEventsSettingsInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.udmEventsSettingsInput"></a>

```java
public GoogleChronicleBigQueryExportUdmEventsSettings getUdmEventsSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---

##### `bigQueryExportPackage`<sup>Required</sup> <a name="bigQueryExportPackage" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.bigQueryExportPackage"></a>

```java
public java.lang.String getBigQueryExportPackage();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExport.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleBigQueryExportConfig <a name="GoogleChronicleBigQueryExportConfig" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportConfig;

GoogleChronicleBigQueryExportConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .location(java.lang.String)
//  .bigQueryExportPackage(java.lang.String)
//  .entityGraphSettings(GoogleChronicleBigQueryExportEntityGraphSettings)
//  .id(java.lang.String)
//  .iocMatchesSettings(GoogleChronicleBigQueryExportIocMatchesSettings)
//  .project(java.lang.String)
//  .ruleDetectionsSettings(GoogleChronicleBigQueryExportRuleDetectionsSettings)
//  .timeouts(GoogleChronicleBigQueryExportTimeouts)
//  .udmEventsAggregatesSettings(GoogleChronicleBigQueryExportUdmEventsAggregatesSettings)
//  .udmEventsSettings(GoogleChronicleBigQueryExportUdmEventsSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.bigQueryExportPackage">bigQueryExportPackage</a></code> | <code>java.lang.String</code> | The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"]. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.entityGraphSettings">entityGraphSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | entity_graph_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.iocMatchesSettings">iocMatchesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | ioc_matches_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.ruleDetectionsSettings">ruleDetectionsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | rule_detections_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings">udmEventsAggregatesSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | udm_events_aggregates_settings block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsSettings">udmEventsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | udm_events_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#instance GoogleChronicleBigQueryExport#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#location GoogleChronicleBigQueryExport#location}

---

##### `bigQueryExportPackage`<sup>Optional</sup> <a name="bigQueryExportPackage" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.bigQueryExportPackage"></a>

```java
public java.lang.String getBigQueryExportPackage();
```

- *Type:* java.lang.String

The BigQueryExportPackage entitled for the Chronicle instance. Possible values: ["BIG_QUERY_EXPORT_PACKAGE_BYOBQ", "BIG_QUERY_EXPORT_PACKAGE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#big_query_export_package GoogleChronicleBigQueryExport#big_query_export_package}

---

##### `entityGraphSettings`<sup>Optional</sup> <a name="entityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.entityGraphSettings"></a>

```java
public GoogleChronicleBigQueryExportEntityGraphSettings getEntityGraphSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

entity_graph_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#entity_graph_settings GoogleChronicleBigQueryExport#entity_graph_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#id GoogleChronicleBigQueryExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iocMatchesSettings`<sup>Optional</sup> <a name="iocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.iocMatchesSettings"></a>

```java
public GoogleChronicleBigQueryExportIocMatchesSettings getIocMatchesSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

ioc_matches_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#ioc_matches_settings GoogleChronicleBigQueryExport#ioc_matches_settings}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#project GoogleChronicleBigQueryExport#project}.

---

##### `ruleDetectionsSettings`<sup>Optional</sup> <a name="ruleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.ruleDetectionsSettings"></a>

```java
public GoogleChronicleBigQueryExportRuleDetectionsSettings getRuleDetectionsSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

rule_detections_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#rule_detections_settings GoogleChronicleBigQueryExport#rule_detections_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.timeouts"></a>

```java
public GoogleChronicleBigQueryExportTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#timeouts GoogleChronicleBigQueryExport#timeouts}

---

##### `udmEventsAggregatesSettings`<sup>Optional</sup> <a name="udmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsAggregatesSettings"></a>

```java
public GoogleChronicleBigQueryExportUdmEventsAggregatesSettings getUdmEventsAggregatesSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

udm_events_aggregates_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#udm_events_aggregates_settings GoogleChronicleBigQueryExport#udm_events_aggregates_settings}

---

##### `udmEventsSettings`<sup>Optional</sup> <a name="udmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportConfig.property.udmEventsSettings"></a>

```java
public GoogleChronicleBigQueryExportUdmEventsSettings getUdmEventsSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

udm_events_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#udm_events_settings GoogleChronicleBigQueryExport#udm_events_settings}

---

### GoogleChronicleBigQueryExportEntityGraphSettings <a name="GoogleChronicleBigQueryExportEntityGraphSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportEntityGraphSettings;

GoogleChronicleBigQueryExportEntityGraphSettings.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .retentionDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportIocMatchesSettings <a name="GoogleChronicleBigQueryExportIocMatchesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportIocMatchesSettings;

GoogleChronicleBigQueryExportIocMatchesSettings.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .retentionDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportRuleDetectionsSettings <a name="GoogleChronicleBigQueryExportRuleDetectionsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportRuleDetectionsSettings;

GoogleChronicleBigQueryExportRuleDetectionsSettings.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .retentionDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportTimeouts <a name="GoogleChronicleBigQueryExportTimeouts" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportTimeouts;

GoogleChronicleBigQueryExportTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#create GoogleChronicleBigQueryExport#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#delete GoogleChronicleBigQueryExport#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#update GoogleChronicleBigQueryExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#create GoogleChronicleBigQueryExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#delete GoogleChronicleBigQueryExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#update GoogleChronicleBigQueryExport#update}.

---

### GoogleChronicleBigQueryExportUdmEventsAggregatesSettings <a name="GoogleChronicleBigQueryExportUdmEventsAggregatesSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings;

GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .retentionDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

### GoogleChronicleBigQueryExportUdmEventsSettings <a name="GoogleChronicleBigQueryExportUdmEventsSettings" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportUdmEventsSettings;

GoogleChronicleBigQueryExportUdmEventsSettings.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .retentionDays(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the data source is enabled for export. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | The retention period for the data source in days. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the data source is enabled for export.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#enabled GoogleChronicleBigQueryExport#enabled}

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

The retention period for the data source in days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/resources/google_chronicle_big_query_export#retention_days GoogleChronicleBigQueryExport#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference <a name="GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference;

new GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataFreshnessTime"></a>

```java
public java.lang.String getDataFreshnessTime();
```

- *Type:* java.lang.String

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.dataVolume"></a>

```java
public java.lang.String getDataVolume();
```

- *Type:* java.lang.String

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.latestExportJobState"></a>

```java
public java.lang.String getLatestExportJobState();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettingsOutputReference.property.internalValue"></a>

```java
public GoogleChronicleBigQueryExportEntityGraphSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportEntityGraphSettings">GoogleChronicleBigQueryExportEntityGraphSettings</a>

---


### GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference <a name="GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference;

new GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataFreshnessTime"></a>

```java
public java.lang.String getDataFreshnessTime();
```

- *Type:* java.lang.String

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.dataVolume"></a>

```java
public java.lang.String getDataVolume();
```

- *Type:* java.lang.String

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.latestExportJobState"></a>

```java
public java.lang.String getLatestExportJobState();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettingsOutputReference.property.internalValue"></a>

```java
public GoogleChronicleBigQueryExportIocMatchesSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportIocMatchesSettings">GoogleChronicleBigQueryExportIocMatchesSettings</a>

---


### GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference <a name="GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference;

new GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataFreshnessTime"></a>

```java
public java.lang.String getDataFreshnessTime();
```

- *Type:* java.lang.String

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.dataVolume"></a>

```java
public java.lang.String getDataVolume();
```

- *Type:* java.lang.String

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.latestExportJobState"></a>

```java
public java.lang.String getLatestExportJobState();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettingsOutputReference.property.internalValue"></a>

```java
public GoogleChronicleBigQueryExportRuleDetectionsSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportRuleDetectionsSettings">GoogleChronicleBigQueryExportRuleDetectionsSettings</a>

---


### GoogleChronicleBigQueryExportTimeoutsOutputReference <a name="GoogleChronicleBigQueryExportTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportTimeoutsOutputReference;

new GoogleChronicleBigQueryExportTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleChronicleBigQueryExportTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportTimeouts">GoogleChronicleBigQueryExportTimeouts</a>

---


### GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference <a name="GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference;

new GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataFreshnessTime"></a>

```java
public java.lang.String getDataFreshnessTime();
```

- *Type:* java.lang.String

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.dataVolume"></a>

```java
public java.lang.String getDataVolume();
```

- *Type:* java.lang.String

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.latestExportJobState"></a>

```java
public java.lang.String getLatestExportJobState();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettingsOutputReference.property.internalValue"></a>

```java
public GoogleChronicleBigQueryExportUdmEventsAggregatesSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsAggregatesSettings">GoogleChronicleBigQueryExportUdmEventsAggregatesSettings</a>

---


### GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference <a name="GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_big_query_export.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference;

new GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime">dataFreshnessTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume">dataVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState">latestExportJobState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput">retentionDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays">retentionDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataFreshnessTime`<sup>Required</sup> <a name="dataFreshnessTime" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataFreshnessTime"></a>

```java
public java.lang.String getDataFreshnessTime();
```

- *Type:* java.lang.String

---

##### `dataVolume`<sup>Required</sup> <a name="dataVolume" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.dataVolume"></a>

```java
public java.lang.String getDataVolume();
```

- *Type:* java.lang.String

---

##### `latestExportJobState`<sup>Required</sup> <a name="latestExportJobState" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.latestExportJobState"></a>

```java
public java.lang.String getLatestExportJobState();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionDaysInput`<sup>Optional</sup> <a name="retentionDaysInput" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDaysInput"></a>

```java
public java.lang.Number getRetentionDaysInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `retentionDays`<sup>Required</sup> <a name="retentionDays" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.retentionDays"></a>

```java
public java.lang.Number getRetentionDays();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettingsOutputReference.property.internalValue"></a>

```java
public GoogleChronicleBigQueryExportUdmEventsSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleBigQueryExport.GoogleChronicleBigQueryExportUdmEventsSettings">GoogleChronicleBigQueryExportUdmEventsSettings</a>

---



