# `googleChronicleParser` Submodule <a name="`googleChronicleParser` Submodule" id="@cdktn/provider-google-beta.googleChronicleParser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleChronicleParser <a name="GoogleChronicleParser" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser google_chronicle_parser}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParser;

GoogleChronicleParser.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .location(java.lang.String)
    .logtype(java.lang.String)
//  .cbn(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .lowCode(GoogleChronicleParserLowCode)
//  .project(java.lang.String)
//  .timeouts(GoogleChronicleParserTimeouts)
//  .validatedOnEmptyLogs(java.lang.Boolean|IResolvable)
//  .validationSkipped(java.lang.Boolean|IResolvable)
//  .versionInfo(GoogleChronicleParserVersionInfo)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.logtype">logtype</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.cbn">cbn</a></code> | <code>java.lang.String</code> | if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#id GoogleChronicleParser#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.lowCode">lowCode</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | low_code block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#project GoogleChronicleParser#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.validatedOnEmptyLogs">validatedOnEmptyLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to bypass parser validation when no logs are found. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.validationSkipped">validationSkipped</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.versionInfo">versionInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | version_info block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#instance GoogleChronicleParser#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#location GoogleChronicleParser#location}

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.logtype"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#logtype GoogleChronicleParser#logtype}

---

##### `cbn`<sup>Optional</sup> <a name="cbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.cbn"></a>

- *Type:* java.lang.String

if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#cbn GoogleChronicleParser#cbn}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#deletion_policy GoogleChronicleParser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#id GoogleChronicleParser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lowCode`<sup>Optional</sup> <a name="lowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.lowCode"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

low_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#low_code GoogleChronicleParser#low_code}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#project GoogleChronicleParser#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#timeouts GoogleChronicleParser#timeouts}

---

##### `validatedOnEmptyLogs`<sup>Optional</sup> <a name="validatedOnEmptyLogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.validatedOnEmptyLogs"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to bypass parser validation when no logs are found.

If enabled, the parser won't be be rejected during the validation
phase when no logs are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#validated_on_empty_logs GoogleChronicleParser#validated_on_empty_logs}

---

##### `validationSkipped`<sup>Optional</sup> <a name="validationSkipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.validationSkipped"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#validation_skipped GoogleChronicleParser#validation_skipped}

---

##### `versionInfo`<sup>Optional</sup> <a name="versionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.Initializer.parameter.versionInfo"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

version_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#version_info GoogleChronicleParser#version_info}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putLowCode">putLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putVersionInfo">putVersionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetCbn">resetCbn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetLowCode">resetLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidatedOnEmptyLogs">resetValidatedOnEmptyLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidationSkipped">resetValidationSkipped</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetVersionInfo">resetVersionInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLowCode` <a name="putLowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putLowCode"></a>

```java
public void putLowCode(GoogleChronicleParserLowCode value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putLowCode.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts"></a>

```java
public void putTimeouts(GoogleChronicleParserTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

---

##### `putVersionInfo` <a name="putVersionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putVersionInfo"></a>

```java
public void putVersionInfo(GoogleChronicleParserVersionInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.putVersionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

---

##### `resetCbn` <a name="resetCbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetCbn"></a>

```java
public void resetCbn()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetId"></a>

```java
public void resetId()
```

##### `resetLowCode` <a name="resetLowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetLowCode"></a>

```java
public void resetLowCode()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidatedOnEmptyLogs` <a name="resetValidatedOnEmptyLogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidatedOnEmptyLogs"></a>

```java
public void resetValidatedOnEmptyLogs()
```

##### `resetValidationSkipped` <a name="resetValidationSkipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetValidationSkipped"></a>

```java
public void resetValidationSkipped()
```

##### `resetVersionInfo` <a name="resetVersionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.resetVersionInfo"></a>

```java
public void resetVersionInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleChronicleParser resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParser;

GoogleChronicleParser.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParser;

GoogleChronicleParser.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParser;

GoogleChronicleParser.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParser;

GoogleChronicleParser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleChronicleParser.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleChronicleParser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleChronicleParser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleChronicleParser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleChronicleParser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.changelogs">changelogs</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList">GoogleChronicleParserChangelogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.creator">creator</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList">GoogleChronicleParserCreatorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dynamicParsingConfig">dynamicParsingConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCode">lowCode</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference">GoogleChronicleParserLowCodeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parser">parser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parserExtension">parserExtension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.releaseStage">releaseStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference">GoogleChronicleParserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationReport">validationReport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationStage">validationStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfo">versionInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference">GoogleChronicleParserVersionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbnInput">cbnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtypeInput">logtypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCodeInput">lowCodeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogsInput">validatedOnEmptyLogsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkippedInput">validationSkippedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfoInput">versionInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbn">cbn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtype">logtype</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogs">validatedOnEmptyLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkipped">validationSkipped</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `changelogs`<sup>Required</sup> <a name="changelogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.changelogs"></a>

```java
public GoogleChronicleParserChangelogsList getChangelogs();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList">GoogleChronicleParserChangelogsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `creator`<sup>Required</sup> <a name="creator" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.creator"></a>

```java
public GoogleChronicleParserCreatorList getCreator();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList">GoogleChronicleParserCreatorList</a>

---

##### `dynamicParsingConfig`<sup>Required</sup> <a name="dynamicParsingConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.dynamicParsingConfig"></a>

```java
public java.lang.String getDynamicParsingConfig();
```

- *Type:* java.lang.String

---

##### `lowCode`<sup>Required</sup> <a name="lowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCode"></a>

```java
public GoogleChronicleParserLowCodeOutputReference getLowCode();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference">GoogleChronicleParserLowCodeOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parser`<sup>Required</sup> <a name="parser" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parser"></a>

```java
public java.lang.String getParser();
```

- *Type:* java.lang.String

---

##### `parserExtension`<sup>Required</sup> <a name="parserExtension" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.parserExtension"></a>

```java
public java.lang.String getParserExtension();
```

- *Type:* java.lang.String

---

##### `releaseStage`<sup>Required</sup> <a name="releaseStage" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.releaseStage"></a>

```java
public java.lang.String getReleaseStage();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeouts"></a>

```java
public GoogleChronicleParserTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference">GoogleChronicleParserTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `validationReport`<sup>Required</sup> <a name="validationReport" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationReport"></a>

```java
public java.lang.String getValidationReport();
```

- *Type:* java.lang.String

---

##### `validationStage`<sup>Required</sup> <a name="validationStage" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationStage"></a>

```java
public java.lang.String getValidationStage();
```

- *Type:* java.lang.String

---

##### `versionInfo`<sup>Required</sup> <a name="versionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfo"></a>

```java
public GoogleChronicleParserVersionInfoOutputReference getVersionInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference">GoogleChronicleParserVersionInfoOutputReference</a>

---

##### `cbnInput`<sup>Optional</sup> <a name="cbnInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbnInput"></a>

```java
public java.lang.String getCbnInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logtypeInput`<sup>Optional</sup> <a name="logtypeInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtypeInput"></a>

```java
public java.lang.String getLogtypeInput();
```

- *Type:* java.lang.String

---

##### `lowCodeInput`<sup>Optional</sup> <a name="lowCodeInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.lowCodeInput"></a>

```java
public GoogleChronicleParserLowCode getLowCodeInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.timeoutsInput"></a>

```java
public IResolvable|GoogleChronicleParserTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

---

##### `validatedOnEmptyLogsInput`<sup>Optional</sup> <a name="validatedOnEmptyLogsInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogsInput"></a>

```java
public java.lang.Boolean|IResolvable getValidatedOnEmptyLogsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validationSkippedInput`<sup>Optional</sup> <a name="validationSkippedInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkippedInput"></a>

```java
public java.lang.Boolean|IResolvable getValidationSkippedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `versionInfoInput`<sup>Optional</sup> <a name="versionInfoInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.versionInfoInput"></a>

```java
public GoogleChronicleParserVersionInfo getVersionInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

---

##### `cbn`<sup>Required</sup> <a name="cbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.cbn"></a>

```java
public java.lang.String getCbn();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.logtype"></a>

```java
public java.lang.String getLogtype();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `validatedOnEmptyLogs`<sup>Required</sup> <a name="validatedOnEmptyLogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validatedOnEmptyLogs"></a>

```java
public java.lang.Boolean|IResolvable getValidatedOnEmptyLogs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validationSkipped`<sup>Required</sup> <a name="validationSkipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.validationSkipped"></a>

```java
public java.lang.Boolean|IResolvable getValidationSkipped();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParser.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleChronicleParserChangelogs <a name="GoogleChronicleParserChangelogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserChangelogs;

GoogleChronicleParserChangelogs.builder()
    .build();
```


### GoogleChronicleParserChangelogsEntries <a name="GoogleChronicleParserChangelogsEntries" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserChangelogsEntries;

GoogleChronicleParserChangelogsEntries.builder()
    .build();
```


### GoogleChronicleParserConfig <a name="GoogleChronicleParserConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserConfig;

GoogleChronicleParserConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .location(java.lang.String)
    .logtype(java.lang.String)
//  .cbn(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .lowCode(GoogleChronicleParserLowCode)
//  .project(java.lang.String)
//  .timeouts(GoogleChronicleParserTimeouts)
//  .validatedOnEmptyLogs(java.lang.Boolean|IResolvable)
//  .validationSkipped(java.lang.Boolean|IResolvable)
//  .versionInfo(GoogleChronicleParserVersionInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.logtype">logtype</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.cbn">cbn</a></code> | <code>java.lang.String</code> | if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#id GoogleChronicleParser#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lowCode">lowCode</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | low_code block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#project GoogleChronicleParser#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validatedOnEmptyLogs">validatedOnEmptyLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to bypass parser validation when no logs are found. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validationSkipped">validationSkipped</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.versionInfo">versionInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | version_info block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#instance GoogleChronicleParser#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#location GoogleChronicleParser#location}

---

##### `logtype`<sup>Required</sup> <a name="logtype" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.logtype"></a>

```java
public java.lang.String getLogtype();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#logtype GoogleChronicleParser#logtype}

---

##### `cbn`<sup>Optional</sup> <a name="cbn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.cbn"></a>

```java
public java.lang.String getCbn();
```

- *Type:* java.lang.String

if the parser is built using config documentation: https://cloud.google.com/chronicle/docs/preview/parser-extensions/parsing-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#cbn GoogleChronicleParser#cbn}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#deletion_policy GoogleChronicleParser#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#id GoogleChronicleParser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lowCode`<sup>Optional</sup> <a name="lowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.lowCode"></a>

```java
public GoogleChronicleParserLowCode getLowCode();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

low_code block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#low_code GoogleChronicleParser#low_code}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#project GoogleChronicleParser#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.timeouts"></a>

```java
public GoogleChronicleParserTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#timeouts GoogleChronicleParser#timeouts}

---

##### `validatedOnEmptyLogs`<sup>Optional</sup> <a name="validatedOnEmptyLogs" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validatedOnEmptyLogs"></a>

```java
public java.lang.Boolean|IResolvable getValidatedOnEmptyLogs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to bypass parser validation when no logs are found.

If enabled, the parser won't be be rejected during the validation
phase when no logs are found.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#validated_on_empty_logs GoogleChronicleParser#validated_on_empty_logs}

---

##### `validationSkipped`<sup>Optional</sup> <a name="validationSkipped" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.validationSkipped"></a>

```java
public java.lang.Boolean|IResolvable getValidationSkipped();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, bypasses parser validation. If enabled, the parser won't be rejected during the validation phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#validation_skipped GoogleChronicleParser#validation_skipped}

---

##### `versionInfo`<sup>Optional</sup> <a name="versionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserConfig.property.versionInfo"></a>

```java
public GoogleChronicleParserVersionInfo getVersionInfo();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

version_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#version_info GoogleChronicleParser#version_info}

---

### GoogleChronicleParserCreator <a name="GoogleChronicleParserCreator" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserCreator;

GoogleChronicleParserCreator.builder()
    .build();
```


### GoogleChronicleParserLowCode <a name="GoogleChronicleParserLowCode" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserLowCode;

GoogleChronicleParserLowCode.builder()
//  .fieldExtractors(GoogleChronicleParserLowCodeFieldExtractors)
//  .log(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.log">log</a></code> | <code>java.lang.String</code> | The log used to create this low code parser in the UI. |

---

##### `fieldExtractors`<sup>Optional</sup> <a name="fieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.fieldExtractors"></a>

```java
public GoogleChronicleParserLowCodeFieldExtractors getFieldExtractors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#field_extractors GoogleChronicleParser#field_extractors}

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode.property.log"></a>

```java
public java.lang.String getLog();
```

- *Type:* java.lang.String

The log used to create this low code parser in the UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#log GoogleChronicleParser#log}

---

### GoogleChronicleParserLowCodeFieldExtractors <a name="GoogleChronicleParserLowCodeFieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserLowCodeFieldExtractors;

GoogleChronicleParserLowCodeFieldExtractors.builder()
//  .appendRepeatedFields(java.lang.Boolean|IResolvable)
//  .extractors(IResolvable|java.util.List<GoogleChronicleParserLowCodeFieldExtractorsExtractors>)
//  .logFormat(java.lang.String)
//  .preprocessConfig(GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.extractors">extractors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>></code> | extractors block. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `appendRepeatedFields`<sup>Optional</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.appendRepeatedFields"></a>

```java
public java.lang.Boolean|IResolvable getAppendRepeatedFields();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#append_repeated_fields GoogleChronicleParser#append_repeated_fields}

---

##### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.extractors"></a>

```java
public IResolvable|java.util.List<GoogleChronicleParserLowCodeFieldExtractorsExtractors> getExtractors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>>

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#extractors GoogleChronicleParser#extractors}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#log_format GoogleChronicleParser#log_format}

---

##### `preprocessConfig`<sup>Optional</sup> <a name="preprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors.property.preprocessConfig"></a>

```java
public GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig getPreprocessConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#preprocess_config GoogleChronicleParser#preprocess_config}

---

### GoogleChronicleParserLowCodeFieldExtractorsExtractors <a name="GoogleChronicleParserLowCodeFieldExtractorsExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserLowCodeFieldExtractorsExtractors;

GoogleChronicleParserLowCodeFieldExtractorsExtractors.builder()
//  .destinationPath(java.lang.String)
//  .fieldPath(java.lang.String)
//  .preconditionOp(java.lang.String)
//  .preconditionPath(java.lang.String)
//  .preconditionValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath">destinationPath</a></code> | <code>java.lang.String</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp">preconditionOp</a></code> | <code>java.lang.String</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath">preconditionPath</a></code> | <code>java.lang.String</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue">preconditionValue</a></code> | <code>java.lang.String</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.value">value</a></code> | <code>java.lang.String</code> | Value to be mapped to the destination path directly. |

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.destinationPath"></a>

```java
public java.lang.String getDestinationPath();
```

- *Type:* java.lang.String

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#destination_path GoogleChronicleParser#destination_path}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#field_path GoogleChronicleParser#field_path}

---

##### `preconditionOp`<sup>Optional</sup> <a name="preconditionOp" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionOp"></a>

```java
public java.lang.String getPreconditionOp();
```

- *Type:* java.lang.String

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#precondition_op GoogleChronicleParser#precondition_op}

---

##### `preconditionPath`<sup>Optional</sup> <a name="preconditionPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionPath"></a>

```java
public java.lang.String getPreconditionPath();
```

- *Type:* java.lang.String

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#precondition_path GoogleChronicleParser#precondition_path}

---

##### `preconditionValue`<sup>Optional</sup> <a name="preconditionValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.preconditionValue"></a>

```java
public java.lang.String getPreconditionValue();
```

- *Type:* java.lang.String

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#precondition_value GoogleChronicleParser#precondition_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#value GoogleChronicleParser#value}

---

### GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig <a name="GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig;

GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.builder()
//  .grokRegex(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex">grokRegex</a></code> | <code>java.lang.String</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target">target</a></code> | <code>java.lang.String</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `grokRegex`<sup>Optional</sup> <a name="grokRegex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```java
public java.lang.String getGrokRegex();
```

- *Type:* java.lang.String

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#grok_regex GoogleChronicleParser#grok_regex}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#target GoogleChronicleParser#target}

---

### GoogleChronicleParserTimeouts <a name="GoogleChronicleParserTimeouts" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserTimeouts;

GoogleChronicleParserTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#create GoogleChronicleParser#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#delete GoogleChronicleParser#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#update GoogleChronicleParser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#create GoogleChronicleParser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#delete GoogleChronicleParser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#update GoogleChronicleParser#update}.

---

### GoogleChronicleParserVersionInfo <a name="GoogleChronicleParserVersionInfo" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserVersionInfo;

GoogleChronicleParserVersionInfo.builder()
    .autoUpgradeDisabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo.property.autoUpgradeDisabled">autoUpgradeDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Signifies if the parser is disabled for auto upgrade. |

---

##### `autoUpgradeDisabled`<sup>Required</sup> <a name="autoUpgradeDisabled" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo.property.autoUpgradeDisabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpgradeDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Signifies if the parser is disabled for auto upgrade.

If true, the parser
will not be upgraded by the auto upgrade process.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_chronicle_parser#auto_upgrade_disabled GoogleChronicleParser#auto_upgrade_disabled}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleChronicleParserChangelogsEntriesList <a name="GoogleChronicleParserChangelogsEntriesList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserChangelogsEntriesList;

new GoogleChronicleParserChangelogsEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.get"></a>

```java
public GoogleChronicleParserChangelogsEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleChronicleParserChangelogsEntriesOutputReference <a name="GoogleChronicleParserChangelogsEntriesOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserChangelogsEntriesOutputReference;

new GoogleChronicleParserChangelogsEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.changeMessage">changeMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.deleted">deleted</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.parserVersion">parserVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries">GoogleChronicleParserChangelogsEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `changeMessage`<sup>Required</sup> <a name="changeMessage" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.changeMessage"></a>

```java
public java.lang.String getChangeMessage();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `deleted`<sup>Required</sup> <a name="deleted" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.deleted"></a>

```java
public IResolvable getDeleted();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `parserVersion`<sup>Required</sup> <a name="parserVersion" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.parserVersion"></a>

```java
public java.lang.String getParserVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesOutputReference.property.internalValue"></a>

```java
public GoogleChronicleParserChangelogsEntries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntries">GoogleChronicleParserChangelogsEntries</a>

---


### GoogleChronicleParserChangelogsList <a name="GoogleChronicleParserChangelogsList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserChangelogsList;

new GoogleChronicleParserChangelogsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.get"></a>

```java
public GoogleChronicleParserChangelogsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleChronicleParserChangelogsOutputReference <a name="GoogleChronicleParserChangelogsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserChangelogsOutputReference;

new GoogleChronicleParserChangelogsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList">GoogleChronicleParserChangelogsEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs">GoogleChronicleParserChangelogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.entries"></a>

```java
public GoogleChronicleParserChangelogsEntriesList getEntries();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsEntriesList">GoogleChronicleParserChangelogsEntriesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogsOutputReference.property.internalValue"></a>

```java
public GoogleChronicleParserChangelogs getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserChangelogs">GoogleChronicleParserChangelogs</a>

---


### GoogleChronicleParserCreatorList <a name="GoogleChronicleParserCreatorList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserCreatorList;

new GoogleChronicleParserCreatorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.get"></a>

```java
public GoogleChronicleParserCreatorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleChronicleParserCreatorOutputReference <a name="GoogleChronicleParserCreatorOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserCreatorOutputReference;

new GoogleChronicleParserCreatorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.author">author</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.customer">customer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator">GoogleChronicleParserCreator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.author"></a>

```java
public java.lang.String getAuthor();
```

- *Type:* java.lang.String

---

##### `customer`<sup>Required</sup> <a name="customer" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.customer"></a>

```java
public java.lang.String getCustomer();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreatorOutputReference.property.internalValue"></a>

```java
public GoogleChronicleParserCreator getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserCreator">GoogleChronicleParserCreator</a>

---


### GoogleChronicleParserLowCodeFieldExtractorsExtractorsList <a name="GoogleChronicleParserLowCodeFieldExtractorsExtractorsList" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList;

new GoogleChronicleParserLowCodeFieldExtractorsExtractorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.get"></a>

```java
public GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleChronicleParserLowCodeFieldExtractorsExtractors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>>

---


### GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference <a name="GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference;

new GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp">resetPreconditionOp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath">resetPreconditionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue">resetPreconditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPath` <a name="resetDestinationPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```java
public void resetDestinationPath()
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```java
public void resetFieldPath()
```

##### `resetPreconditionOp` <a name="resetPreconditionOp" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```java
public void resetPreconditionOp()
```

##### `resetPreconditionPath` <a name="resetPreconditionPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```java
public void resetPreconditionPath()
```

##### `resetPreconditionValue` <a name="resetPreconditionValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```java
public void resetPreconditionValue()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">preconditionOpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">preconditionPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">preconditionValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath">destinationPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp">preconditionOp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath">preconditionPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue">preconditionValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```java
public java.lang.String getDestinationPathInput();
```

- *Type:* java.lang.String

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```java
public java.lang.String getFieldPathInput();
```

- *Type:* java.lang.String

---

##### `preconditionOpInput`<sup>Optional</sup> <a name="preconditionOpInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```java
public java.lang.String getPreconditionOpInput();
```

- *Type:* java.lang.String

---

##### `preconditionPathInput`<sup>Optional</sup> <a name="preconditionPathInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```java
public java.lang.String getPreconditionPathInput();
```

- *Type:* java.lang.String

---

##### `preconditionValueInput`<sup>Optional</sup> <a name="preconditionValueInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```java
public java.lang.String getPreconditionValueInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```java
public java.lang.String getDestinationPath();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `preconditionOp`<sup>Required</sup> <a name="preconditionOp" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```java
public java.lang.String getPreconditionOp();
```

- *Type:* java.lang.String

---

##### `preconditionPath`<sup>Required</sup> <a name="preconditionPath" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```java
public java.lang.String getPreconditionPath();
```

- *Type:* java.lang.String

---

##### `preconditionValue`<sup>Required</sup> <a name="preconditionValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```java
public java.lang.String getPreconditionValue();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleChronicleParserLowCodeFieldExtractorsExtractors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>

---


### GoogleChronicleParserLowCodeFieldExtractorsOutputReference <a name="GoogleChronicleParserLowCodeFieldExtractorsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference;

new GoogleChronicleParserLowCodeFieldExtractorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors">putExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig">putPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields">resetAppendRepeatedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors">resetExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig">resetPreprocessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtractors` <a name="putExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors"></a>

```java
public void putExtractors(IResolvable|java.util.List<GoogleChronicleParserLowCodeFieldExtractorsExtractors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>>

---

##### `putPreprocessConfig` <a name="putPreprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig"></a>

```java
public void putPreprocessConfig(GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.putPreprocessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---

##### `resetAppendRepeatedFields` <a name="resetAppendRepeatedFields" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```java
public void resetAppendRepeatedFields()
```

##### `resetExtractors` <a name="resetExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetExtractors"></a>

```java
public void resetExtractors()
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetLogFormat"></a>

```java
public void resetLogFormat()
```

##### `resetPreprocessConfig` <a name="resetPreprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```java
public void resetPreprocessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors">extractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList">GoogleChronicleParserLowCodeFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet">transformedCbnSnippet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">appendRepeatedFieldsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput">extractorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput">preprocessConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extractors`<sup>Required</sup> <a name="extractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractors"></a>

```java
public GoogleChronicleParserLowCodeFieldExtractorsExtractorsList getExtractors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractorsList">GoogleChronicleParserLowCodeFieldExtractorsExtractorsList</a>

---

##### `preprocessConfig`<sup>Required</sup> <a name="preprocessConfig" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfig"></a>

```java
public GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference getPreprocessConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `transformedCbnSnippet`<sup>Required</sup> <a name="transformedCbnSnippet" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```java
public java.lang.String getTransformedCbnSnippet();
```

- *Type:* java.lang.String

---

##### `appendRepeatedFieldsInput`<sup>Optional</sup> <a name="appendRepeatedFieldsInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```java
public java.lang.Boolean|IResolvable getAppendRepeatedFieldsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `extractorsInput`<sup>Optional</sup> <a name="extractorsInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.extractorsInput"></a>

```java
public IResolvable|java.util.List<GoogleChronicleParserLowCodeFieldExtractorsExtractors> getExtractorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsExtractors">GoogleChronicleParserLowCodeFieldExtractorsExtractors</a>>

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormatInput"></a>

```java
public java.lang.String getLogFormatInput();
```

- *Type:* java.lang.String

---

##### `preprocessConfigInput`<sup>Optional</sup> <a name="preprocessConfigInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```java
public GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig getPreprocessConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---

##### `appendRepeatedFields`<sup>Required</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```java
public java.lang.Boolean|IResolvable getAppendRepeatedFields();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference.property.internalValue"></a>

```java
public GoogleChronicleParserLowCodeFieldExtractors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

---


### GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference <a name="GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference;

new GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">resetGrokRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrokRegex` <a name="resetGrokRegex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```java
public void resetGrokRegex()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">grokRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">grokRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grokRegexInput`<sup>Optional</sup> <a name="grokRegexInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```java
public java.lang.String getGrokRegexInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `grokRegex`<sup>Required</sup> <a name="grokRegex" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```java
public java.lang.String getGrokRegex();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```java
public GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig">GoogleChronicleParserLowCodeFieldExtractorsPreprocessConfig</a>

---


### GoogleChronicleParserLowCodeOutputReference <a name="GoogleChronicleParserLowCodeOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserLowCodeOutputReference;

new GoogleChronicleParserLowCodeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors">putFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetFieldExtractors">resetFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetLog">resetLog</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldExtractors` <a name="putFieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors"></a>

```java
public void putFieldExtractors(GoogleChronicleParserLowCodeFieldExtractors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.putFieldExtractors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

---

##### `resetFieldExtractors` <a name="resetFieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetFieldExtractors"></a>

```java
public void resetFieldExtractors()
```

##### `resetLog` <a name="resetLog" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.resetLog"></a>

```java
public void resetLog()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference">GoogleChronicleParserLowCodeFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractorsInput">fieldExtractorsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.logInput">logInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.log">log</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldExtractors`<sup>Required</sup> <a name="fieldExtractors" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractors"></a>

```java
public GoogleChronicleParserLowCodeFieldExtractorsOutputReference getFieldExtractors();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractorsOutputReference">GoogleChronicleParserLowCodeFieldExtractorsOutputReference</a>

---

##### `fieldExtractorsInput`<sup>Optional</sup> <a name="fieldExtractorsInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.fieldExtractorsInput"></a>

```java
public GoogleChronicleParserLowCodeFieldExtractors getFieldExtractorsInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeFieldExtractors">GoogleChronicleParserLowCodeFieldExtractors</a>

---

##### `logInput`<sup>Optional</sup> <a name="logInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.logInput"></a>

```java
public java.lang.String getLogInput();
```

- *Type:* java.lang.String

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.log"></a>

```java
public java.lang.String getLog();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCodeOutputReference.property.internalValue"></a>

```java
public GoogleChronicleParserLowCode getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserLowCode">GoogleChronicleParserLowCode</a>

---


### GoogleChronicleParserTimeoutsOutputReference <a name="GoogleChronicleParserTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserTimeoutsOutputReference;

new GoogleChronicleParserTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleChronicleParserTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserTimeouts">GoogleChronicleParserTimeouts</a>

---


### GoogleChronicleParserVersionInfoOutputReference <a name="GoogleChronicleParserVersionInfoOutputReference" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_chronicle_parser.GoogleChronicleParserVersionInfoOutputReference;

new GoogleChronicleParserVersionInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParser">latestParser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParserVersion">latestParserVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.rollbackAvailable">rollbackAvailable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput">autoUpgradeDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled">autoUpgradeDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `latestParser`<sup>Required</sup> <a name="latestParser" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParser"></a>

```java
public java.lang.String getLatestParser();
```

- *Type:* java.lang.String

---

##### `latestParserVersion`<sup>Required</sup> <a name="latestParserVersion" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.latestParserVersion"></a>

```java
public java.lang.String getLatestParserVersion();
```

- *Type:* java.lang.String

---

##### `rollbackAvailable`<sup>Required</sup> <a name="rollbackAvailable" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.rollbackAvailable"></a>

```java
public IResolvable getRollbackAvailable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `autoUpgradeDisabledInput`<sup>Optional</sup> <a name="autoUpgradeDisabledInput" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpgradeDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `autoUpgradeDisabled`<sup>Required</sup> <a name="autoUpgradeDisabled" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.autoUpgradeDisabled"></a>

```java
public java.lang.Boolean|IResolvable getAutoUpgradeDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfoOutputReference.property.internalValue"></a>

```java
public GoogleChronicleParserVersionInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleChronicleParser.GoogleChronicleParserVersionInfo">GoogleChronicleParserVersionInfo</a>

---



