# `googleNetworkServicesWasmPlugin` Submodule <a name="`googleNetworkServicesWasmPlugin` Submodule" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleNetworkServicesWasmPlugin <a name="GoogleNetworkServicesWasmPlugin" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin google_network_services_wasm_plugin}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPlugin;

GoogleNetworkServicesWasmPlugin.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mainVersionId(java.lang.String)
    .name(java.lang.String)
    .versions(IResolvable|java.util.List<GoogleNetworkServicesWasmPluginVersions>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .logConfig(GoogleNetworkServicesWasmPluginLogConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesWasmPluginTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.mainVersionId">mainVersionId</a></code> | <code>java.lang.String</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.versions">versions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>></code> | versions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mainVersionId`<sup>Required</sup> <a name="mainVersionId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.mainVersionId"></a>

- *Type:* java.lang.String

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#main_version_id GoogleNetworkServicesWasmPlugin#main_version_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#name GoogleNetworkServicesWasmPlugin#name}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.versions"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>>

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#versions GoogleNetworkServicesWasmPlugin#versions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#description GoogleNetworkServicesWasmPlugin#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#labels GoogleNetworkServicesWasmPlugin#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#location GoogleNetworkServicesWasmPlugin#location}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.logConfig"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#log_config GoogleNetworkServicesWasmPlugin#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#timeouts GoogleNetworkServicesWasmPlugin#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions">putVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig"></a>

```java
public void putLogConfig(GoogleNetworkServicesWasmPluginLogConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts"></a>

```java
public void putTimeouts(GoogleNetworkServicesWasmPluginTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

---

##### `putVersions` <a name="putVersions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions"></a>

```java
public void putVersions(IResolvable|java.util.List<GoogleNetworkServicesWasmPluginVersions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.putVersions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetLogConfig"></a>

```java
public void resetLogConfig()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleNetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPlugin;

GoogleNetworkServicesWasmPlugin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPlugin;

GoogleNetworkServicesWasmPlugin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPlugin;

GoogleNetworkServicesWasmPlugin.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPlugin;

GoogleNetworkServicesWasmPlugin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleNetworkServicesWasmPlugin.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleNetworkServicesWasmPlugin resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleNetworkServicesWasmPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleNetworkServicesWasmPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleNetworkServicesWasmPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference">GoogleNetworkServicesWasmPluginLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference">GoogleNetworkServicesWasmPluginTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.usedBy">usedBy</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList">GoogleNetworkServicesWasmPluginUsedByList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versions">versions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList">GoogleNetworkServicesWasmPluginVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionIdInput">mainVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versionsInput">versionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionId">mainVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfig"></a>

```java
public GoogleNetworkServicesWasmPluginLogConfigOutputReference getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference">GoogleNetworkServicesWasmPluginLogConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeouts"></a>

```java
public GoogleNetworkServicesWasmPluginTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference">GoogleNetworkServicesWasmPluginTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `usedBy`<sup>Required</sup> <a name="usedBy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.usedBy"></a>

```java
public GoogleNetworkServicesWasmPluginUsedByList getUsedBy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList">GoogleNetworkServicesWasmPluginUsedByList</a>

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versions"></a>

```java
public GoogleNetworkServicesWasmPluginVersionsList getVersions();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList">GoogleNetworkServicesWasmPluginVersionsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.logConfigInput"></a>

```java
public GoogleNetworkServicesWasmPluginLogConfig getLogConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---

##### `mainVersionIdInput`<sup>Optional</sup> <a name="mainVersionIdInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionIdInput"></a>

```java
public java.lang.String getMainVersionIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.timeoutsInput"></a>

```java
public IResolvable|GoogleNetworkServicesWasmPluginTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.versionsInput"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesWasmPluginVersions> getVersionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `mainVersionId`<sup>Required</sup> <a name="mainVersionId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.mainVersionId"></a>

```java
public java.lang.String getMainVersionId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPlugin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleNetworkServicesWasmPluginConfig <a name="GoogleNetworkServicesWasmPluginConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginConfig;

GoogleNetworkServicesWasmPluginConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .mainVersionId(java.lang.String)
    .name(java.lang.String)
    .versions(IResolvable|java.util.List<GoogleNetworkServicesWasmPluginVersions>)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .logConfig(GoogleNetworkServicesWasmPluginLogConfig)
//  .project(java.lang.String)
//  .timeouts(GoogleNetworkServicesWasmPluginTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.mainVersionId">mainVersionId</a></code> | <code>java.lang.String</code> | The ID of the WasmPluginVersion resource that is the currently serving one. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier. Name of the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.versions">versions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>></code> | versions block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the traffic extension. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `mainVersionId`<sup>Required</sup> <a name="mainVersionId" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.mainVersionId"></a>

```java
public java.lang.String getMainVersionId();
```

- *Type:* java.lang.String

The ID of the WasmPluginVersion resource that is the currently serving one.

The version referred to must be a child of this WasmPlugin resource and should be listed in the "versions" field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#main_version_id GoogleNetworkServicesWasmPlugin#main_version_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier. Name of the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#name GoogleNetworkServicesWasmPlugin#name}

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.versions"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesWasmPluginVersions> getVersions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>>

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#versions GoogleNetworkServicesWasmPlugin#versions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#description GoogleNetworkServicesWasmPlugin#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#id GoogleNetworkServicesWasmPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Set of labels associated with the WasmPlugin resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#labels GoogleNetworkServicesWasmPlugin#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the traffic extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#location GoogleNetworkServicesWasmPlugin#location}

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.logConfig"></a>

```java
public GoogleNetworkServicesWasmPluginLogConfig getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#log_config GoogleNetworkServicesWasmPlugin#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#project GoogleNetworkServicesWasmPlugin#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginConfig.property.timeouts"></a>

```java
public GoogleNetworkServicesWasmPluginTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#timeouts GoogleNetworkServicesWasmPlugin#timeouts}

---

### GoogleNetworkServicesWasmPluginLogConfig <a name="GoogleNetworkServicesWasmPluginLogConfig" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginLogConfig;

GoogleNetworkServicesWasmPluginLogConfig.builder()
//  .enable(java.lang.Boolean|IResolvable)
//  .minLogLevel(java.lang.String)
//  .sampleRate(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Optional. Specifies whether to enable logging for activity by this plugin. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.minLogLevel">minLogLevel</a></code> | <code>java.lang.String</code> | Non-empty default. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | Non-empty default. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Optional. Specifies whether to enable logging for activity by this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#enable GoogleNetworkServicesWasmPlugin#enable}

---

##### `minLogLevel`<sup>Optional</sup> <a name="minLogLevel" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.minLogLevel"></a>

```java
public java.lang.String getMinLogLevel();
```

- *Type:* java.lang.String

Non-empty default.

Specificies the lowest level of the plugin logs that are exported to Cloud Logging. This setting relates to the logs generated by using logging statements in your Wasm code.
This field is can be set only if logging is enabled for the plugin.
If the field is not provided when logging is enabled, it is set to INFO by default. Possible values: ["LOG_LEVEL_UNSPECIFIED", "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "CRITICAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#min_log_level GoogleNetworkServicesWasmPlugin#min_log_level}

---

##### `sampleRate`<sup>Optional</sup> <a name="sampleRate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

Non-empty default.

Configures the sampling rate of activity logs, where 1.0 means all logged activity is reported and 0.0 means no activity is reported.
A floating point value between 0.0 and 1.0 indicates that a percentage of log messages is stored.
The default value when logging is enabled is 1.0. The value of the field must be between 0 and 1 (inclusive).
This field can be specified only if logging is enabled for this plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#sample_rate GoogleNetworkServicesWasmPlugin#sample_rate}

---

### GoogleNetworkServicesWasmPluginTimeouts <a name="GoogleNetworkServicesWasmPluginTimeouts" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginTimeouts;

GoogleNetworkServicesWasmPluginTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#create GoogleNetworkServicesWasmPlugin#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#delete GoogleNetworkServicesWasmPlugin#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#update GoogleNetworkServicesWasmPlugin#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#create GoogleNetworkServicesWasmPlugin#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#delete GoogleNetworkServicesWasmPlugin#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#update GoogleNetworkServicesWasmPlugin#update}.

---

### GoogleNetworkServicesWasmPluginUsedBy <a name="GoogleNetworkServicesWasmPluginUsedBy" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginUsedBy;

GoogleNetworkServicesWasmPluginUsedBy.builder()
    .build();
```


### GoogleNetworkServicesWasmPluginVersions <a name="GoogleNetworkServicesWasmPluginVersions" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginVersions;

GoogleNetworkServicesWasmPluginVersions.builder()
    .versionName(java.lang.String)
//  .description(java.lang.String)
//  .imageUri(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .pluginConfigData(java.lang.String)
//  .pluginConfigUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.versionName">versionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#version_name GoogleNetworkServicesWasmPlugin#version_name}. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.description">description</a></code> | <code>java.lang.String</code> | Optional. A human-readable description of the resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. Set of labels associated with the WasmPlugin resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigData">pluginConfigData</a></code> | <code>java.lang.String</code> | A base64-encoded string containing the configuration for the plugin. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigUri">pluginConfigUri</a></code> | <code>java.lang.String</code> | URI of the plugin configuration stored in the Artifact Registry. |

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#version_name GoogleNetworkServicesWasmPlugin#version_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#description GoogleNetworkServicesWasmPlugin#description}

---

##### `imageUri`<sup>Optional</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

Optional.

URI of the container image containing the plugin, stored in the Artifact Registry. When a new WasmPluginVersion resource is created, the digest of the container image is saved in the imageDigest field.
When downloading an image, the digest value is used instead of an image tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#image_uri GoogleNetworkServicesWasmPlugin#image_uri}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional. Set of labels associated with the WasmPlugin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#labels GoogleNetworkServicesWasmPlugin#labels}

---

##### `pluginConfigData`<sup>Optional</sup> <a name="pluginConfigData" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigData"></a>

```java
public java.lang.String getPluginConfigData();
```

- *Type:* java.lang.String

A base64-encoded string containing the configuration for the plugin.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
When a new WasmPluginVersion resource is created, the digest of the contents is saved in the pluginConfigDigest field.
Conflics with pluginConfigUri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#plugin_config_data GoogleNetworkServicesWasmPlugin#plugin_config_data}

---

##### `pluginConfigUri`<sup>Optional</sup> <a name="pluginConfigUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions.property.pluginConfigUri"></a>

```java
public java.lang.String getPluginConfigUri();
```

- *Type:* java.lang.String

URI of the plugin configuration stored in the Artifact Registry.

The configuration is provided to the plugin at runtime through the ON_CONFIGURE callback.
The container image must contain only a single file with the name plugin.config.
When a new WasmPluginVersion resource is created, the digest of the container image is saved in the pluginConfigDigest field.
Conflics with pluginConfigData.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/resources/google_network_services_wasm_plugin#plugin_config_uri GoogleNetworkServicesWasmPlugin#plugin_config_uri}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleNetworkServicesWasmPluginLogConfigOutputReference <a name="GoogleNetworkServicesWasmPluginLogConfigOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference;

new GoogleNetworkServicesWasmPluginLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel">resetMinLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate">resetSampleRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetEnable"></a>

```java
public void resetEnable()
```

##### `resetMinLogLevel` <a name="resetMinLogLevel" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetMinLogLevel"></a>

```java
public void resetMinLogLevel()
```

##### `resetSampleRate` <a name="resetSampleRate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.resetSampleRate"></a>

```java
public void resetSampleRate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput">minLogLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput">sampleRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enable">enable</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel">minLogLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enableInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `minLogLevelInput`<sup>Optional</sup> <a name="minLogLevelInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevelInput"></a>

```java
public java.lang.String getMinLogLevelInput();
```

- *Type:* java.lang.String

---

##### `sampleRateInput`<sup>Optional</sup> <a name="sampleRateInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRateInput"></a>

```java
public java.lang.Number getSampleRateInput();
```

- *Type:* java.lang.Number

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.enable"></a>

```java
public java.lang.Boolean|IResolvable getEnable();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `minLogLevel`<sup>Required</sup> <a name="minLogLevel" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.minLogLevel"></a>

```java
public java.lang.String getMinLogLevel();
```

- *Type:* java.lang.String

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfigOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesWasmPluginLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginLogConfig">GoogleNetworkServicesWasmPluginLogConfig</a>

---


### GoogleNetworkServicesWasmPluginTimeoutsOutputReference <a name="GoogleNetworkServicesWasmPluginTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference;

new GoogleNetworkServicesWasmPluginTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesWasmPluginTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginTimeouts">GoogleNetworkServicesWasmPluginTimeouts</a>

---


### GoogleNetworkServicesWasmPluginUsedByList <a name="GoogleNetworkServicesWasmPluginUsedByList" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginUsedByList;

new GoogleNetworkServicesWasmPluginUsedByList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get"></a>

```java
public GoogleNetworkServicesWasmPluginUsedByOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### GoogleNetworkServicesWasmPluginUsedByOutputReference <a name="GoogleNetworkServicesWasmPluginUsedByOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginUsedByOutputReference;

new GoogleNetworkServicesWasmPluginUsedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy">GoogleNetworkServicesWasmPluginUsedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedByOutputReference.property.internalValue"></a>

```java
public GoogleNetworkServicesWasmPluginUsedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginUsedBy">GoogleNetworkServicesWasmPluginUsedBy</a>

---


### GoogleNetworkServicesWasmPluginVersionsList <a name="GoogleNetworkServicesWasmPluginVersionsList" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginVersionsList;

new GoogleNetworkServicesWasmPluginVersionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get"></a>

```java
public GoogleNetworkServicesWasmPluginVersionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GoogleNetworkServicesWasmPluginVersions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>>

---


### GoogleNetworkServicesWasmPluginVersionsOutputReference <a name="GoogleNetworkServicesWasmPluginVersionsOutputReference" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_network_services_wasm_plugin.GoogleNetworkServicesWasmPluginVersionsOutputReference;

new GoogleNetworkServicesWasmPluginVersionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetImageUri">resetImageUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData">resetPluginConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri">resetPluginConfigUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetImageUri` <a name="resetImageUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetImageUri"></a>

```java
public void resetImageUri()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetPluginConfigData` <a name="resetPluginConfigData" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigData"></a>

```java
public void resetPluginConfigData()
```

##### `resetPluginConfigUri` <a name="resetPluginConfigUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.resetPluginConfigUri"></a>

```java
public void resetPluginConfigUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageDigest">imageDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest">pluginConfigDigest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput">imageUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput">pluginConfigDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput">pluginConfigUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput">versionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData">pluginConfigData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri">pluginConfigUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionName">versionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageDigest"></a>

```java
public java.lang.String getImageDigest();
```

- *Type:* java.lang.String

---

##### `pluginConfigDigest`<sup>Required</sup> <a name="pluginConfigDigest" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDigest"></a>

```java
public java.lang.String getPluginConfigDigest();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `imageUriInput`<sup>Optional</sup> <a name="imageUriInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUriInput"></a>

```java
public java.lang.String getImageUriInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pluginConfigDataInput`<sup>Optional</sup> <a name="pluginConfigDataInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigDataInput"></a>

```java
public java.lang.String getPluginConfigDataInput();
```

- *Type:* java.lang.String

---

##### `pluginConfigUriInput`<sup>Optional</sup> <a name="pluginConfigUriInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUriInput"></a>

```java
public java.lang.String getPluginConfigUriInput();
```

- *Type:* java.lang.String

---

##### `versionNameInput`<sup>Optional</sup> <a name="versionNameInput" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionNameInput"></a>

```java
public java.lang.String getVersionNameInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `pluginConfigData`<sup>Required</sup> <a name="pluginConfigData" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigData"></a>

```java
public java.lang.String getPluginConfigData();
```

- *Type:* java.lang.String

---

##### `pluginConfigUri`<sup>Required</sup> <a name="pluginConfigUri" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.pluginConfigUri"></a>

```java
public java.lang.String getPluginConfigUri();
```

- *Type:* java.lang.String

---

##### `versionName`<sup>Required</sup> <a name="versionName" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.versionName"></a>

```java
public java.lang.String getVersionName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersionsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleNetworkServicesWasmPluginVersions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleNetworkServicesWasmPlugin.GoogleNetworkServicesWasmPluginVersions">GoogleNetworkServicesWasmPluginVersions</a>

---



