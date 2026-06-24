# `googleApigeeEnvironmentDebugmask` Submodule <a name="`googleApigeeEnvironmentDebugmask` Submodule" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApigeeEnvironmentDebugmask <a name="GoogleApigeeEnvironmentDebugmask" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask google_apigee_environment_debugmask}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_debugmask.GoogleApigeeEnvironmentDebugmask;

GoogleApigeeEnvironmentDebugmask.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .envId(java.lang.String)
//  .faultXPaths(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .namespaces(java.util.Map<java.lang.String, java.lang.String>)
//  .requestJsonPaths(java.util.List<java.lang.String>)
//  .requestXPaths(java.util.List<java.lang.String>)
//  .responseJsonPaths(java.util.List<java.lang.String>)
//  .responseXPaths(java.util.List<java.lang.String>)
//  .timeouts(GoogleApigeeEnvironmentDebugmaskTimeouts)
//  .variables(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.faultXPaths">faultXPaths</a></code> | <code>java.util.List<java.lang.String></code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#id GoogleApigeeEnvironmentDebugmask#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.namespaces">namespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of namespaces to URIs. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.requestJsonPaths">requestJsonPaths</a></code> | <code>java.util.List<java.lang.String></code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.requestXPaths">requestXPaths</a></code> | <code>java.util.List<java.lang.String></code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.responseJsonPaths">responseJsonPaths</a></code> | <code>java.util.List<java.lang.String></code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.responseXPaths">responseXPaths</a></code> | <code>java.util.List<java.lang.String></code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.variables">variables</a></code> | <code>java.util.List<java.lang.String></code> | List of variables that the debug mask applies to. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.envId"></a>

- *Type:* java.lang.String

The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#env_id GoogleApigeeEnvironmentDebugmask#env_id}

---

##### `faultXPaths`<sup>Optional</sup> <a name="faultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.faultXPaths"></a>

- *Type:* java.util.List<java.lang.String>

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#fault_x_paths GoogleApigeeEnvironmentDebugmask#fault_x_paths}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#id GoogleApigeeEnvironmentDebugmask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.namespaces"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of namespaces to URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#namespaces GoogleApigeeEnvironmentDebugmask#namespaces}

---

##### `requestJsonPaths`<sup>Optional</sup> <a name="requestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.requestJsonPaths"></a>

- *Type:* java.util.List<java.lang.String>

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#request_json_paths GoogleApigeeEnvironmentDebugmask#request_json_paths}

---

##### `requestXPaths`<sup>Optional</sup> <a name="requestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.requestXPaths"></a>

- *Type:* java.util.List<java.lang.String>

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#request_x_paths GoogleApigeeEnvironmentDebugmask#request_x_paths}

---

##### `responseJsonPaths`<sup>Optional</sup> <a name="responseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.responseJsonPaths"></a>

- *Type:* java.util.List<java.lang.String>

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#response_json_paths GoogleApigeeEnvironmentDebugmask#response_json_paths}

---

##### `responseXPaths`<sup>Optional</sup> <a name="responseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.responseXPaths"></a>

- *Type:* java.util.List<java.lang.String>

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#response_x_paths GoogleApigeeEnvironmentDebugmask#response_x_paths}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#timeouts GoogleApigeeEnvironmentDebugmask#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.Initializer.parameter.variables"></a>

- *Type:* java.util.List<java.lang.String>

List of variables that the debug mask applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#variables GoogleApigeeEnvironmentDebugmask#variables}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetFaultXPaths">resetFaultXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetNamespaces">resetNamespaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestJsonPaths">resetRequestJsonPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestXPaths">resetRequestXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseJsonPaths">resetResponseJsonPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseXPaths">resetResponseXPaths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetVariables">resetVariables</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts"></a>

```java
public void putTimeouts(GoogleApigeeEnvironmentDebugmaskTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

---

##### `resetFaultXPaths` <a name="resetFaultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetFaultXPaths"></a>

```java
public void resetFaultXPaths()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetId"></a>

```java
public void resetId()
```

##### `resetNamespaces` <a name="resetNamespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetNamespaces"></a>

```java
public void resetNamespaces()
```

##### `resetRequestJsonPaths` <a name="resetRequestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestJsonPaths"></a>

```java
public void resetRequestJsonPaths()
```

##### `resetRequestXPaths` <a name="resetRequestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetRequestXPaths"></a>

```java
public void resetRequestXPaths()
```

##### `resetResponseJsonPaths` <a name="resetResponseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseJsonPaths"></a>

```java
public void resetResponseJsonPaths()
```

##### `resetResponseXPaths` <a name="resetResponseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetResponseXPaths"></a>

```java
public void resetResponseXPaths()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVariables` <a name="resetVariables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.resetVariables"></a>

```java
public void resetVariables()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_debugmask.GoogleApigeeEnvironmentDebugmask;

GoogleApigeeEnvironmentDebugmask.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_debugmask.GoogleApigeeEnvironmentDebugmask;

GoogleApigeeEnvironmentDebugmask.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_debugmask.GoogleApigeeEnvironmentDebugmask;

GoogleApigeeEnvironmentDebugmask.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_debugmask.GoogleApigeeEnvironmentDebugmask;

GoogleApigeeEnvironmentDebugmask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApigeeEnvironmentDebugmask.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleApigeeEnvironmentDebugmask resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApigeeEnvironmentDebugmask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApigeeEnvironmentDebugmask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApigeeEnvironmentDebugmask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference">GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envIdInput">envIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPathsInput">faultXPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespacesInput">namespacesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPathsInput">requestJsonPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPathsInput">requestXPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPathsInput">responseJsonPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPathsInput">responseXPathsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variablesInput">variablesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envId">envId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPaths">faultXPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespaces">namespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPaths">requestJsonPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPaths">requestXPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPaths">responseJsonPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPaths">responseXPaths</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variables">variables</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeouts"></a>

```java
public GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference">GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference</a>

---

##### `envIdInput`<sup>Optional</sup> <a name="envIdInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envIdInput"></a>

```java
public java.lang.String getEnvIdInput();
```

- *Type:* java.lang.String

---

##### `faultXPathsInput`<sup>Optional</sup> <a name="faultXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPathsInput"></a>

```java
public java.util.List<java.lang.String> getFaultXPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `namespacesInput`<sup>Optional</sup> <a name="namespacesInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespacesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNamespacesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestJsonPathsInput`<sup>Optional</sup> <a name="requestJsonPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPathsInput"></a>

```java
public java.util.List<java.lang.String> getRequestJsonPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestXPathsInput`<sup>Optional</sup> <a name="requestXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPathsInput"></a>

```java
public java.util.List<java.lang.String> getRequestXPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseJsonPathsInput`<sup>Optional</sup> <a name="responseJsonPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPathsInput"></a>

```java
public java.util.List<java.lang.String> getResponseJsonPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseXPathsInput`<sup>Optional</sup> <a name="responseXPathsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPathsInput"></a>

```java
public java.util.List<java.lang.String> getResponseXPathsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.timeoutsInput"></a>

```java
public IResolvable|GoogleApigeeEnvironmentDebugmaskTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variablesInput"></a>

```java
public java.util.List<java.lang.String> getVariablesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

---

##### `faultXPaths`<sup>Required</sup> <a name="faultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.faultXPaths"></a>

```java
public java.util.List<java.lang.String> getFaultXPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `namespaces`<sup>Required</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.namespaces"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNamespaces();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `requestJsonPaths`<sup>Required</sup> <a name="requestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestJsonPaths"></a>

```java
public java.util.List<java.lang.String> getRequestJsonPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requestXPaths`<sup>Required</sup> <a name="requestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.requestXPaths"></a>

```java
public java.util.List<java.lang.String> getRequestXPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseJsonPaths`<sup>Required</sup> <a name="responseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseJsonPaths"></a>

```java
public java.util.List<java.lang.String> getResponseJsonPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `responseXPaths`<sup>Required</sup> <a name="responseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.responseXPaths"></a>

```java
public java.util.List<java.lang.String> getResponseXPaths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.variables"></a>

```java
public java.util.List<java.lang.String> getVariables();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmask.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApigeeEnvironmentDebugmaskConfig <a name="GoogleApigeeEnvironmentDebugmaskConfig" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_debugmask.GoogleApigeeEnvironmentDebugmaskConfig;

GoogleApigeeEnvironmentDebugmaskConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .envId(java.lang.String)
//  .faultXPaths(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .namespaces(java.util.Map<java.lang.String, java.lang.String>)
//  .requestJsonPaths(java.util.List<java.lang.String>)
//  .requestXPaths(java.util.List<java.lang.String>)
//  .responseJsonPaths(java.util.List<java.lang.String>)
//  .responseXPaths(java.util.List<java.lang.String>)
//  .timeouts(GoogleApigeeEnvironmentDebugmaskTimeouts)
//  .variables(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.envId">envId</a></code> | <code>java.lang.String</code> | The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.faultXPaths">faultXPaths</a></code> | <code>java.util.List<java.lang.String></code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#id GoogleApigeeEnvironmentDebugmask#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.namespaces">namespaces</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of namespaces to URIs. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths">requestJsonPaths</a></code> | <code>java.util.List<java.lang.String></code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestXPaths">requestXPaths</a></code> | <code>java.util.List<java.lang.String></code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths">responseJsonPaths</a></code> | <code>java.util.List<java.lang.String></code> | List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseXPaths">responseXPaths</a></code> | <code>java.util.List<java.lang.String></code> | List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.variables">variables</a></code> | <code>java.util.List<java.lang.String></code> | List of variables that the debug mask applies to. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `envId`<sup>Required</sup> <a name="envId" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.envId"></a>

```java
public java.lang.String getEnvId();
```

- *Type:* java.lang.String

The Apigee environment group associated with the Apigee environment, in the format organizations/{{org_name}}/environments/{{env_name}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#env_id GoogleApigeeEnvironmentDebugmask#env_id}

---

##### `faultXPaths`<sup>Optional</sup> <a name="faultXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.faultXPaths"></a>

```java
public java.util.List<java.lang.String> getFaultXPaths();
```

- *Type:* java.util.List<java.lang.String>

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for fault messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#fault_x_paths GoogleApigeeEnvironmentDebugmask#fault_x_paths}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#id GoogleApigeeEnvironmentDebugmask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `namespaces`<sup>Optional</sup> <a name="namespaces" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.namespaces"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getNamespaces();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of namespaces to URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#namespaces GoogleApigeeEnvironmentDebugmask#namespaces}

---

##### `requestJsonPaths`<sup>Optional</sup> <a name="requestJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestJsonPaths"></a>

```java
public java.util.List<java.lang.String> getRequestJsonPaths();
```

- *Type:* java.util.List<java.lang.String>

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#request_json_paths GoogleApigeeEnvironmentDebugmask#request_json_paths}

---

##### `requestXPaths`<sup>Optional</sup> <a name="requestXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.requestXPaths"></a>

```java
public java.util.List<java.lang.String> getRequestXPaths();
```

- *Type:* java.util.List<java.lang.String>

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for request messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#request_x_paths GoogleApigeeEnvironmentDebugmask#request_x_paths}

---

##### `responseJsonPaths`<sup>Optional</sup> <a name="responseJsonPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseJsonPaths"></a>

```java
public java.util.List<java.lang.String> getResponseJsonPaths();
```

- *Type:* java.util.List<java.lang.String>

List of JSONPath expressions that specify the JSON elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#response_json_paths GoogleApigeeEnvironmentDebugmask#response_json_paths}

---

##### `responseXPaths`<sup>Optional</sup> <a name="responseXPaths" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.responseXPaths"></a>

```java
public java.util.List<java.lang.String> getResponseXPaths();
```

- *Type:* java.util.List<java.lang.String>

List of XPath expressions that specify the XML elements or attributes that the debug mask applies to for response messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#response_x_paths GoogleApigeeEnvironmentDebugmask#response_x_paths}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.timeouts"></a>

```java
public GoogleApigeeEnvironmentDebugmaskTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#timeouts GoogleApigeeEnvironmentDebugmask#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskConfig.property.variables"></a>

```java
public java.util.List<java.lang.String> getVariables();
```

- *Type:* java.util.List<java.lang.String>

List of variables that the debug mask applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#variables GoogleApigeeEnvironmentDebugmask#variables}

---

### GoogleApigeeEnvironmentDebugmaskTimeouts <a name="GoogleApigeeEnvironmentDebugmaskTimeouts" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_debugmask.GoogleApigeeEnvironmentDebugmaskTimeouts;

GoogleApigeeEnvironmentDebugmaskTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#create GoogleApigeeEnvironmentDebugmask#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#delete GoogleApigeeEnvironmentDebugmask#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#update GoogleApigeeEnvironmentDebugmask#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#create GoogleApigeeEnvironmentDebugmask#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#delete GoogleApigeeEnvironmentDebugmask#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.38.0/docs/resources/google_apigee_environment_debugmask#update GoogleApigeeEnvironmentDebugmask#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference <a name="GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_apigee_environment_debugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference;

new GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleApigeeEnvironmentDebugmaskTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApigeeEnvironmentDebugmask.GoogleApigeeEnvironmentDebugmaskTimeouts">GoogleApigeeEnvironmentDebugmaskTimeouts</a>

---



