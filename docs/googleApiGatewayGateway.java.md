# `googleApiGatewayGateway` Submodule <a name="`googleApiGatewayGateway` Submodule" id="@cdktn/provider-google-beta.googleApiGatewayGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleApiGatewayGateway <a name="GoogleApiGatewayGateway" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway google_api_gateway_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_api_gateway_gateway.GoogleApiGatewayGateway;

GoogleApiGatewayGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiConfig(java.lang.String)
    .gatewayId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleApiGatewayGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.apiConfig">apiConfig</a></code> | <code>java.lang.String</code> | Resource name of the API Config for this Gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project). |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-visible name for the API. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#id GoogleApiGatewayGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#project GoogleApiGatewayGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the gateway for the API. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.apiConfig"></a>

- *Type:* java.lang.String

Resource name of the API Config for this Gateway.

Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}.
When changing api configs please ensure the new config is a new resource and the
[lifecycle](https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle) rule 'create_before_destroy' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#api_config GoogleApiGatewayGateway#api_config}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.gatewayId"></a>

- *Type:* java.lang.String

Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#gateway_id GoogleApiGatewayGateway#gateway_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#deletion_policy GoogleApiGatewayGateway#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

A user-visible name for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#display_name GoogleApiGatewayGateway#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#id GoogleApiGatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#labels GoogleApiGatewayGateway#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#project GoogleApiGatewayGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the gateway for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#region GoogleApiGatewayGateway#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#timeouts GoogleApiGatewayGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.putTimeouts"></a>

```java
public void putTimeouts(GoogleApiGatewayGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleApiGatewayGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_api_gateway_gateway.GoogleApiGatewayGateway;

GoogleApiGatewayGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_api_gateway_gateway.GoogleApiGatewayGateway;

GoogleApiGatewayGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_api_gateway_gateway.GoogleApiGatewayGateway;

GoogleApiGatewayGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_api_gateway_gateway.GoogleApiGatewayGateway;

GoogleApiGatewayGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleApiGatewayGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleApiGatewayGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleApiGatewayGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleApiGatewayGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleApiGatewayGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.defaultHostname">defaultHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference">GoogleApiGatewayGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.apiConfigInput">apiConfigInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.gatewayIdInput">gatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.apiConfig">apiConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.defaultHostname"></a>

```java
public java.lang.String getDefaultHostname();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.timeouts"></a>

```java
public GoogleApiGatewayGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference">GoogleApiGatewayGatewayTimeoutsOutputReference</a>

---

##### `apiConfigInput`<sup>Optional</sup> <a name="apiConfigInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.apiConfigInput"></a>

```java
public java.lang.String getApiConfigInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.gatewayIdInput"></a>

```java
public java.lang.String getGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.timeoutsInput"></a>

```java
public IResolvable|GoogleApiGatewayGatewayTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a>

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.apiConfig"></a>

```java
public java.lang.String getApiConfig();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleApiGatewayGatewayConfig <a name="GoogleApiGatewayGatewayConfig" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_api_gateway_gateway.GoogleApiGatewayGatewayConfig;

GoogleApiGatewayGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiConfig(java.lang.String)
    .gatewayId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(GoogleApiGatewayGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.apiConfig">apiConfig</a></code> | <code>java.lang.String</code> | Resource name of the API Config for this Gateway. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.gatewayId">gatewayId</a></code> | <code>java.lang.String</code> | Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project). |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | A user-visible name for the API. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#id GoogleApiGatewayGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Resource labels to represent user-provided metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#project GoogleApiGatewayGateway#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the gateway for the API. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.apiConfig"></a>

```java
public java.lang.String getApiConfig();
```

- *Type:* java.lang.String

Resource name of the API Config for this Gateway.

Format: projects/{project}/locations/global/apis/{api}/configs/{apiConfig}.
When changing api configs please ensure the new config is a new resource and the
[lifecycle](https://developer.hashicorp.com/terraform/language/meta-arguments/lifecycle) rule 'create_before_destroy' is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#api_config GoogleApiGatewayGateway#api_config}

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.gatewayId"></a>

```java
public java.lang.String getGatewayId();
```

- *Type:* java.lang.String

Identifier to assign to the Gateway. Must be unique within scope of the parent resource(project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#gateway_id GoogleApiGatewayGateway#gateway_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#deletion_policy GoogleApiGatewayGateway#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

A user-visible name for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#display_name GoogleApiGatewayGateway#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#id GoogleApiGatewayGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Resource labels to represent user-provided metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#labels GoogleApiGatewayGateway#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#project GoogleApiGatewayGateway#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the gateway for the API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#region GoogleApiGatewayGateway#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayConfig.property.timeouts"></a>

```java
public GoogleApiGatewayGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#timeouts GoogleApiGatewayGateway#timeouts}

---

### GoogleApiGatewayGatewayTimeouts <a name="GoogleApiGatewayGatewayTimeouts" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_api_gateway_gateway.GoogleApiGatewayGatewayTimeouts;

GoogleApiGatewayGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#create GoogleApiGatewayGateway#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#delete GoogleApiGatewayGateway#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#update GoogleApiGatewayGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#create GoogleApiGatewayGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#delete GoogleApiGatewayGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.35.0/docs/resources/google_api_gateway_gateway#update GoogleApiGatewayGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleApiGatewayGatewayTimeoutsOutputReference <a name="GoogleApiGatewayGatewayTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_api_gateway_gateway.GoogleApiGatewayGatewayTimeoutsOutputReference;

new GoogleApiGatewayGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleApiGatewayGatewayTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleApiGatewayGateway.GoogleApiGatewayGatewayTimeouts">GoogleApiGatewayGatewayTimeouts</a>

---



