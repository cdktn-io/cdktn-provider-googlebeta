# `googleServiceNetworkingVpcServiceControls` Submodule <a name="`googleServiceNetworkingVpcServiceControls` Submodule" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceNetworkingVpcServiceControls <a name="GoogleServiceNetworkingVpcServiceControls" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls google_service_networking_vpc_service_controls}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_networking_vpc_service_controls.GoogleServiceNetworkingVpcServiceControls;

GoogleServiceNetworkingVpcServiceControls.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enabled(java.lang.Boolean|IResolvable)
    .network(java.lang.String)
    .service(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleServiceNetworkingVpcServiceControlsTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Desired VPC Service Controls state service producer VPC network, as described at the top of this page. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The network that the consumer is using to connect with services. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The service that is managing peering connectivity for a service producer's organization. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#id GoogleServiceNetworkingVpcServiceControls#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The id of the Google Cloud project containing the consumer network. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Desired VPC Service Controls state service producer VPC network, as described at the top of this page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#enabled GoogleServiceNetworkingVpcServiceControls#enabled}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The network that the consumer is using to connect with services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#network GoogleServiceNetworkingVpcServiceControls#network}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The service that is managing peering connectivity for a service producer's organization.

For Google services that support this
functionality, this value is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#service GoogleServiceNetworkingVpcServiceControls#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#id GoogleServiceNetworkingVpcServiceControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The id of the Google Cloud project containing the consumer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#project GoogleServiceNetworkingVpcServiceControls#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#timeouts GoogleServiceNetworkingVpcServiceControls#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.putTimeouts"></a>

```java
public void putTimeouts(GoogleServiceNetworkingVpcServiceControlsTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleServiceNetworkingVpcServiceControls resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_service_networking_vpc_service_controls.GoogleServiceNetworkingVpcServiceControls;

GoogleServiceNetworkingVpcServiceControls.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_service_networking_vpc_service_controls.GoogleServiceNetworkingVpcServiceControls;

GoogleServiceNetworkingVpcServiceControls.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_service_networking_vpc_service_controls.GoogleServiceNetworkingVpcServiceControls;

GoogleServiceNetworkingVpcServiceControls.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_service_networking_vpc_service_controls.GoogleServiceNetworkingVpcServiceControls;

GoogleServiceNetworkingVpcServiceControls.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleServiceNetworkingVpcServiceControls.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleServiceNetworkingVpcServiceControls resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleServiceNetworkingVpcServiceControls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleServiceNetworkingVpcServiceControls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleServiceNetworkingVpcServiceControls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference">GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.timeouts"></a>

```java
public GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference">GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.timeoutsInput"></a>

```java
public IResolvable|GoogleServiceNetworkingVpcServiceControlsTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControls.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceNetworkingVpcServiceControlsConfig <a name="GoogleServiceNetworkingVpcServiceControlsConfig" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_networking_vpc_service_controls.GoogleServiceNetworkingVpcServiceControlsConfig;

GoogleServiceNetworkingVpcServiceControlsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .enabled(java.lang.Boolean|IResolvable)
    .network(java.lang.String)
    .service(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(GoogleServiceNetworkingVpcServiceControlsTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Desired VPC Service Controls state service producer VPC network, as described at the top of this page. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.network">network</a></code> | <code>java.lang.String</code> | The network that the consumer is using to connect with services. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.service">service</a></code> | <code>java.lang.String</code> | The service that is managing peering connectivity for a service producer's organization. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#id GoogleServiceNetworkingVpcServiceControls#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.project">project</a></code> | <code>java.lang.String</code> | The id of the Google Cloud project containing the consumer network. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Desired VPC Service Controls state service producer VPC network, as described at the top of this page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#enabled GoogleServiceNetworkingVpcServiceControls#enabled}

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The network that the consumer is using to connect with services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#network GoogleServiceNetworkingVpcServiceControls#network}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The service that is managing peering connectivity for a service producer's organization.

For Google services that support this
functionality, this value is 'servicenetworking.googleapis.com'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#service GoogleServiceNetworkingVpcServiceControls#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#id GoogleServiceNetworkingVpcServiceControls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The id of the Google Cloud project containing the consumer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#project GoogleServiceNetworkingVpcServiceControls#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsConfig.property.timeouts"></a>

```java
public GoogleServiceNetworkingVpcServiceControlsTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#timeouts GoogleServiceNetworkingVpcServiceControls#timeouts}

---

### GoogleServiceNetworkingVpcServiceControlsTimeouts <a name="GoogleServiceNetworkingVpcServiceControlsTimeouts" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_networking_vpc_service_controls.GoogleServiceNetworkingVpcServiceControlsTimeouts;

GoogleServiceNetworkingVpcServiceControlsTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#create GoogleServiceNetworkingVpcServiceControls#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#delete GoogleServiceNetworkingVpcServiceControls#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#update GoogleServiceNetworkingVpcServiceControls#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#create GoogleServiceNetworkingVpcServiceControls#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#delete GoogleServiceNetworkingVpcServiceControls#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/resources/google_service_networking_vpc_service_controls#update GoogleServiceNetworkingVpcServiceControls#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference <a name="GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_networking_vpc_service_controls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference;

new GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleServiceNetworkingVpcServiceControlsTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceNetworkingVpcServiceControls.GoogleServiceNetworkingVpcServiceControlsTimeouts">GoogleServiceNetworkingVpcServiceControlsTimeouts</a>

---



