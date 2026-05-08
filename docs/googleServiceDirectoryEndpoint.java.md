# `googleServiceDirectoryEndpoint` Submodule <a name="`googleServiceDirectoryEndpoint` Submodule" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleServiceDirectoryEndpoint <a name="GoogleServiceDirectoryEndpoint" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint google_service_directory_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_directory_endpoint.GoogleServiceDirectoryEndpoint;

GoogleServiceDirectoryEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointId(java.lang.String)
    .service(java.lang.String)
//  .address(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .port(java.lang.Number)
//  .timeouts(GoogleServiceDirectoryEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.endpointId">endpointId</a></code> | <code>java.lang.String</code> | The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The resource name of the service that this endpoint provides. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | IPv4 or IPv6 address of the endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#id GoogleServiceDirectoryEndpoint#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata for the endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Port that the endpoint is running on, must be in the range of [0, 65535]. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.endpointId"></a>

- *Type:* java.lang.String

The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#endpoint_id GoogleServiceDirectoryEndpoint#endpoint_id}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The resource name of the service that this endpoint provides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#service GoogleServiceDirectoryEndpoint#service}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.address"></a>

- *Type:* java.lang.String

IPv4 or IPv6 address of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#address GoogleServiceDirectoryEndpoint#address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#id GoogleServiceDirectoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata for the endpoint.

This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 512 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#metadata GoogleServiceDirectoryEndpoint#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#network GoogleServiceDirectoryEndpoint#network}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Port that the endpoint is running on, must be in the range of [0, 65535].

If unspecified, the default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#port GoogleServiceDirectoryEndpoint#port}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#timeouts GoogleServiceDirectoryEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.putTimeouts"></a>

```java
public void putTimeouts(GoogleServiceDirectoryEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>

---

##### `resetAddress` <a name="resetAddress" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetPort"></a>

```java
public void resetPort()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleServiceDirectoryEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.google_service_directory_endpoint.GoogleServiceDirectoryEndpoint;

GoogleServiceDirectoryEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.google_service_directory_endpoint.GoogleServiceDirectoryEndpoint;

GoogleServiceDirectoryEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformResource"></a>

```java
import io.cdktn.providers.google_beta.google_service_directory_endpoint.GoogleServiceDirectoryEndpoint;

GoogleServiceDirectoryEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.google_service_directory_endpoint.GoogleServiceDirectoryEndpoint;

GoogleServiceDirectoryEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoogleServiceDirectoryEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GoogleServiceDirectoryEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoogleServiceDirectoryEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoogleServiceDirectoryEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GoogleServiceDirectoryEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference">GoogleServiceDirectoryEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.endpointIdInput">endpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.timeouts"></a>

```java
public GoogleServiceDirectoryEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference">GoogleServiceDirectoryEndpointTimeoutsOutputReference</a>

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.endpointIdInput"></a>

```java
public java.lang.String getEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.timeoutsInput"></a>

```java
public IResolvable|GoogleServiceDirectoryEndpointTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleServiceDirectoryEndpointConfig <a name="GoogleServiceDirectoryEndpointConfig" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_directory_endpoint.GoogleServiceDirectoryEndpointConfig;

GoogleServiceDirectoryEndpointConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .endpointId(java.lang.String)
    .service(java.lang.String)
//  .address(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .port(java.lang.Number)
//  .timeouts(GoogleServiceDirectoryEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.endpointId">endpointId</a></code> | <code>java.lang.String</code> | The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.service">service</a></code> | <code>java.lang.String</code> | The resource name of the service that this endpoint provides. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.address">address</a></code> | <code>java.lang.String</code> | IPv4 or IPv6 address of the endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#id GoogleServiceDirectoryEndpoint#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Metadata for the endpoint. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.network">network</a></code> | <code>java.lang.String</code> | The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Port that the endpoint is running on, must be in the range of [0, 65535]. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.endpointId"></a>

```java
public java.lang.String getEndpointId();
```

- *Type:* java.lang.String

The Resource ID must be 1-63 characters long, including digits, lowercase letters or the hyphen character.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#endpoint_id GoogleServiceDirectoryEndpoint#endpoint_id}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The resource name of the service that this endpoint provides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#service GoogleServiceDirectoryEndpoint#service}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

IPv4 or IPv6 address of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#address GoogleServiceDirectoryEndpoint#address}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#id GoogleServiceDirectoryEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Metadata for the endpoint.

This data can be consumed
by service clients. The entire metadata dictionary may contain
up to 512 characters, spread across all key-value pairs.
Metadata that goes beyond any these limits will be rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#metadata GoogleServiceDirectoryEndpoint#metadata}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The URL to the network, such as projects/PROJECT_NUMBER/locations/global/networks/NETWORK_NAME.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#network GoogleServiceDirectoryEndpoint#network}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port that the endpoint is running on, must be in the range of [0, 65535].

If unspecified, the default is 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#port GoogleServiceDirectoryEndpoint#port}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointConfig.property.timeouts"></a>

```java
public GoogleServiceDirectoryEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#timeouts GoogleServiceDirectoryEndpoint#timeouts}

---

### GoogleServiceDirectoryEndpointTimeouts <a name="GoogleServiceDirectoryEndpointTimeouts" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_directory_endpoint.GoogleServiceDirectoryEndpointTimeouts;

GoogleServiceDirectoryEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#create GoogleServiceDirectoryEndpoint#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#delete GoogleServiceDirectoryEndpoint#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#update GoogleServiceDirectoryEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#create GoogleServiceDirectoryEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#delete GoogleServiceDirectoryEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.50.0/docs/resources/google_service_directory_endpoint#update GoogleServiceDirectoryEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleServiceDirectoryEndpointTimeoutsOutputReference <a name="GoogleServiceDirectoryEndpointTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.google_service_directory_endpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference;

new GoogleServiceDirectoryEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|GoogleServiceDirectoryEndpointTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleServiceDirectoryEndpoint.GoogleServiceDirectoryEndpointTimeouts">GoogleServiceDirectoryEndpointTimeouts</a>

---



