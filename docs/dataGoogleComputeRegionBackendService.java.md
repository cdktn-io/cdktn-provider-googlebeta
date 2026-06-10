# `dataGoogleComputeRegionBackendService` Submodule <a name="`dataGoogleComputeRegionBackendService` Submodule" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionBackendService <a name="DataGoogleComputeRegionBackendService" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service google_compute_region_backend_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendService;

DataGoogleComputeRegionBackendService.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#id DataGoogleComputeRegionBackendService#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#project DataGoogleComputeRegionBackendService#project}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#name DataGoogleComputeRegionBackendService#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#id DataGoogleComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#project DataGoogleComputeRegionBackendService#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#region DataGoogleComputeRegionBackendService#region}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.resetRegion"></a>

```java
public void resetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeRegionBackendService resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendService;

DataGoogleComputeRegionBackendService.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendService;

DataGoogleComputeRegionBackendService.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendService;

DataGoogleComputeRegionBackendService.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendService;

DataGoogleComputeRegionBackendService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleComputeRegionBackendService.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleComputeRegionBackendService resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleComputeRegionBackendService to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleComputeRegionBackendService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionBackendService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.affinityCookieTtlSec">affinityCookieTtlSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.backend">backend</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList">DataGoogleComputeRegionBackendServiceBackendList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdnPolicy">cdnPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.circuitBreakers">circuitBreakers</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList">DataGoogleComputeRegionBackendServiceCircuitBreakersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec">connectionDrainingTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionTrackingPolicy">connectionTrackingPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.consistentHash">consistentHash</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList">DataGoogleComputeRegionBackendServiceConsistentHashList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList">DataGoogleComputeRegionBackendServiceCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dynamicForwarding">dynamicForwarding</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList">DataGoogleComputeRegionBackendServiceDynamicForwardingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.enableCdn">enableCdn</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.failoverPolicy">failoverPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList">DataGoogleComputeRegionBackendServiceFailoverPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.generatedId">generatedId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.haPolicy">haPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList">DataGoogleComputeRegionBackendServiceHaPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.healthChecks">healthChecks</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.iap">iap</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList">DataGoogleComputeRegionBackendServiceIapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.ipAddressSelectionPolicy">ipAddressSelectionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.localityLbPolicy">localityLbPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.logConfig">logConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList">DataGoogleComputeRegionBackendServiceLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.networkPassThroughLbTrafficPolicy">networkPassThroughLbTrafficPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList">DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.outlierDetection">outlierDetection</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList">DataGoogleComputeRegionBackendServiceOutlierDetectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.params">params</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList">DataGoogleComputeRegionBackendServiceParamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.portName">portName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.strongSessionAffinityCookie">strongSessionAffinityCookie</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.subsetting">subsetting</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList">DataGoogleComputeRegionBackendServiceSubsettingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.timeoutSec">timeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.tlsSettings">tlsSettings</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList">DataGoogleComputeRegionBackendServiceTlsSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `affinityCookieTtlSec`<sup>Required</sup> <a name="affinityCookieTtlSec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.affinityCookieTtlSec"></a>

```java
public java.lang.Number getAffinityCookieTtlSec();
```

- *Type:* java.lang.Number

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.backend"></a>

```java
public DataGoogleComputeRegionBackendServiceBackendList getBackend();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList">DataGoogleComputeRegionBackendServiceBackendList</a>

---

##### `cdnPolicy`<sup>Required</sup> <a name="cdnPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.cdnPolicy"></a>

```java
public DataGoogleComputeRegionBackendServiceCdnPolicyList getCdnPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyList</a>

---

##### `circuitBreakers`<sup>Required</sup> <a name="circuitBreakers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.circuitBreakers"></a>

```java
public DataGoogleComputeRegionBackendServiceCircuitBreakersList getCircuitBreakers();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList">DataGoogleComputeRegionBackendServiceCircuitBreakersList</a>

---

##### `connectionDrainingTimeoutSec`<sup>Required</sup> <a name="connectionDrainingTimeoutSec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionDrainingTimeoutSec"></a>

```java
public java.lang.Number getConnectionDrainingTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `connectionTrackingPolicy`<sup>Required</sup> <a name="connectionTrackingPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.connectionTrackingPolicy"></a>

```java
public DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList getConnectionTrackingPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList</a>

---

##### `consistentHash`<sup>Required</sup> <a name="consistentHash" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.consistentHash"></a>

```java
public DataGoogleComputeRegionBackendServiceConsistentHashList getConsistentHash();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList">DataGoogleComputeRegionBackendServiceConsistentHashList</a>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.customMetrics"></a>

```java
public DataGoogleComputeRegionBackendServiceCustomMetricsList getCustomMetrics();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList">DataGoogleComputeRegionBackendServiceCustomMetricsList</a>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dynamicForwarding`<sup>Required</sup> <a name="dynamicForwarding" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.dynamicForwarding"></a>

```java
public DataGoogleComputeRegionBackendServiceDynamicForwardingList getDynamicForwarding();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList">DataGoogleComputeRegionBackendServiceDynamicForwardingList</a>

---

##### `enableCdn`<sup>Required</sup> <a name="enableCdn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.enableCdn"></a>

```java
public IResolvable getEnableCdn();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `failoverPolicy`<sup>Required</sup> <a name="failoverPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.failoverPolicy"></a>

```java
public DataGoogleComputeRegionBackendServiceFailoverPolicyList getFailoverPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList">DataGoogleComputeRegionBackendServiceFailoverPolicyList</a>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `generatedId`<sup>Required</sup> <a name="generatedId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.generatedId"></a>

```java
public java.lang.Number getGeneratedId();
```

- *Type:* java.lang.Number

---

##### `haPolicy`<sup>Required</sup> <a name="haPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.haPolicy"></a>

```java
public DataGoogleComputeRegionBackendServiceHaPolicyList getHaPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList">DataGoogleComputeRegionBackendServiceHaPolicyList</a>

---

##### `healthChecks`<sup>Required</sup> <a name="healthChecks" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.healthChecks"></a>

```java
public java.util.List<java.lang.String> getHealthChecks();
```

- *Type:* java.util.List<java.lang.String>

---

##### `iap`<sup>Required</sup> <a name="iap" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.iap"></a>

```java
public DataGoogleComputeRegionBackendServiceIapList getIap();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList">DataGoogleComputeRegionBackendServiceIapList</a>

---

##### `ipAddressSelectionPolicy`<sup>Required</sup> <a name="ipAddressSelectionPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.ipAddressSelectionPolicy"></a>

```java
public java.lang.String getIpAddressSelectionPolicy();
```

- *Type:* java.lang.String

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `localityLbPolicy`<sup>Required</sup> <a name="localityLbPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.localityLbPolicy"></a>

```java
public java.lang.String getLocalityLbPolicy();
```

- *Type:* java.lang.String

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.logConfig"></a>

```java
public DataGoogleComputeRegionBackendServiceLogConfigList getLogConfig();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList">DataGoogleComputeRegionBackendServiceLogConfigList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `networkPassThroughLbTrafficPolicy`<sup>Required</sup> <a name="networkPassThroughLbTrafficPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.networkPassThroughLbTrafficPolicy"></a>

```java
public DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList getNetworkPassThroughLbTrafficPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList">DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList</a>

---

##### `outlierDetection`<sup>Required</sup> <a name="outlierDetection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.outlierDetection"></a>

```java
public DataGoogleComputeRegionBackendServiceOutlierDetectionList getOutlierDetection();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList">DataGoogleComputeRegionBackendServiceOutlierDetectionList</a>

---

##### `params`<sup>Required</sup> <a name="params" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.params"></a>

```java
public DataGoogleComputeRegionBackendServiceParamsList getParams();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList">DataGoogleComputeRegionBackendServiceParamsList</a>

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.portName"></a>

```java
public java.lang.String getPortName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

---

##### `strongSessionAffinityCookie`<sup>Required</sup> <a name="strongSessionAffinityCookie" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.strongSessionAffinityCookie"></a>

```java
public DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList getStrongSessionAffinityCookie();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList</a>

---

##### `subsetting`<sup>Required</sup> <a name="subsetting" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.subsetting"></a>

```java
public DataGoogleComputeRegionBackendServiceSubsettingList getSubsetting();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList">DataGoogleComputeRegionBackendServiceSubsettingList</a>

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.timeoutSec"></a>

```java
public java.lang.Number getTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `tlsSettings`<sup>Required</sup> <a name="tlsSettings" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.tlsSettings"></a>

```java
public DataGoogleComputeRegionBackendServiceTlsSettingsList getTlsSettings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList">DataGoogleComputeRegionBackendServiceTlsSettingsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendService.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionBackendServiceBackend <a name="DataGoogleComputeRegionBackendServiceBackend" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceBackend;

DataGoogleComputeRegionBackendServiceBackend.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceBackendCustomMetrics <a name="DataGoogleComputeRegionBackendServiceBackendCustomMetrics" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceBackendCustomMetrics;

DataGoogleComputeRegionBackendServiceBackendCustomMetrics.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceCdnPolicy <a name="DataGoogleComputeRegionBackendServiceCdnPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCdnPolicy;

DataGoogleComputeRegionBackendServiceCdnPolicy.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy <a name="DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy;

DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy <a name="DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy;

DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceCircuitBreakers <a name="DataGoogleComputeRegionBackendServiceCircuitBreakers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCircuitBreakers;

DataGoogleComputeRegionBackendServiceCircuitBreakers.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout;

DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceConfig <a name="DataGoogleComputeRegionBackendServiceConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConfig;

DataGoogleComputeRegionBackendServiceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#id DataGoogleComputeRegionBackendService#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#project DataGoogleComputeRegionBackendService#project}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created backend service should reside. If it is not provided, the provider region is used. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#name DataGoogleComputeRegionBackendService#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#id DataGoogleComputeRegionBackendService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#project DataGoogleComputeRegionBackendService#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region in which the created backend service should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.36.0/docs/data-sources/google_compute_region_backend_service#region DataGoogleComputeRegionBackendService#region}

---

### DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy <a name="DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy;

DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceConsistentHash <a name="DataGoogleComputeRegionBackendServiceConsistentHash" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConsistentHash;

DataGoogleComputeRegionBackendServiceConsistentHash.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie;

DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl;

DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceCustomMetrics <a name="DataGoogleComputeRegionBackendServiceCustomMetrics" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCustomMetrics;

DataGoogleComputeRegionBackendServiceCustomMetrics.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceDynamicForwarding <a name="DataGoogleComputeRegionBackendServiceDynamicForwarding" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceDynamicForwarding;

DataGoogleComputeRegionBackendServiceDynamicForwarding.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy;

DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection;

DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceFailoverPolicy <a name="DataGoogleComputeRegionBackendServiceFailoverPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceFailoverPolicy;

DataGoogleComputeRegionBackendServiceFailoverPolicy.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceHaPolicy <a name="DataGoogleComputeRegionBackendServiceHaPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceHaPolicy;

DataGoogleComputeRegionBackendServiceHaPolicy.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceHaPolicyLeader <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeader" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeader.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceHaPolicyLeader;

DataGoogleComputeRegionBackendServiceHaPolicyLeader.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint;

DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceIap <a name="DataGoogleComputeRegionBackendServiceIap" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceIap;

DataGoogleComputeRegionBackendServiceIap.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceLogConfig <a name="DataGoogleComputeRegionBackendServiceLogConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceLogConfig;

DataGoogleComputeRegionBackendServiceLogConfig.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy <a name="DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy;

DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity <a name="DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity;

DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceOutlierDetection <a name="DataGoogleComputeRegionBackendServiceOutlierDetection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceOutlierDetection;

DataGoogleComputeRegionBackendServiceOutlierDetection.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime;

DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceOutlierDetectionInterval <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionInterval" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval;

DataGoogleComputeRegionBackendServiceOutlierDetectionInterval.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceParams <a name="DataGoogleComputeRegionBackendServiceParams" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParams.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceParams;

DataGoogleComputeRegionBackendServiceParams.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie;

DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl;

DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceSubsetting <a name="DataGoogleComputeRegionBackendServiceSubsetting" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceSubsetting;

DataGoogleComputeRegionBackendServiceSubsetting.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceTlsSettings <a name="DataGoogleComputeRegionBackendServiceTlsSettings" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceTlsSettings;

DataGoogleComputeRegionBackendServiceTlsSettings.builder()
    .build();
```


### DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames <a name="DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames;

DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionBackendServiceBackendCustomMetricsList <a name="DataGoogleComputeRegionBackendServiceBackendCustomMetricsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList;

new DataGoogleComputeRegionBackendServiceBackendCustomMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference <a name="DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference;

new DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.dryRun">dryRun</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization">maxUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics">DataGoogleComputeRegionBackendServiceBackendCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.dryRun"></a>

```java
public IResolvable getDryRun();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `maxUtilization`<sup>Required</sup> <a name="maxUtilization" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.maxUtilization"></a>

```java
public java.lang.Number getMaxUtilization();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceBackendCustomMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetrics">DataGoogleComputeRegionBackendServiceBackendCustomMetrics</a>

---


### DataGoogleComputeRegionBackendServiceBackendList <a name="DataGoogleComputeRegionBackendServiceBackendList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceBackendList;

new DataGoogleComputeRegionBackendServiceBackendList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceBackendOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceBackendOutputReference <a name="DataGoogleComputeRegionBackendServiceBackendOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceBackendOutputReference;

new DataGoogleComputeRegionBackendServiceBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode">balancingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler">capacityScaler</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.customMetrics">customMetrics</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList">DataGoogleComputeRegionBackendServiceBackendCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.failover">failover</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint">maxConnectionsPerEndpoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance">maxConnectionsPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxInFlightRequests">maxInFlightRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxInFlightRequestsPerEndpoint">maxInFlightRequestsPerEndpoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxInFlightRequestsPerInstance">maxInFlightRequestsPerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate">maxRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint">maxRatePerEndpoint</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance">maxRatePerInstance</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization">maxUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.trafficDuration">trafficDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend">DataGoogleComputeRegionBackendServiceBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `balancingMode`<sup>Required</sup> <a name="balancingMode" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.balancingMode"></a>

```java
public java.lang.String getBalancingMode();
```

- *Type:* java.lang.String

---

##### `capacityScaler`<sup>Required</sup> <a name="capacityScaler" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.capacityScaler"></a>

```java
public java.lang.Number getCapacityScaler();
```

- *Type:* java.lang.Number

---

##### `customMetrics`<sup>Required</sup> <a name="customMetrics" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.customMetrics"></a>

```java
public DataGoogleComputeRegionBackendServiceBackendCustomMetricsList getCustomMetrics();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendCustomMetricsList">DataGoogleComputeRegionBackendServiceBackendCustomMetricsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.failover"></a>

```java
public IResolvable getFailover();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerEndpoint`<sup>Required</sup> <a name="maxConnectionsPerEndpoint" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerEndpoint"></a>

```java
public java.lang.Number getMaxConnectionsPerEndpoint();
```

- *Type:* java.lang.Number

---

##### `maxConnectionsPerInstance`<sup>Required</sup> <a name="maxConnectionsPerInstance" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxConnectionsPerInstance"></a>

```java
public java.lang.Number getMaxConnectionsPerInstance();
```

- *Type:* java.lang.Number

---

##### `maxInFlightRequests`<sup>Required</sup> <a name="maxInFlightRequests" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxInFlightRequests"></a>

```java
public java.lang.Number getMaxInFlightRequests();
```

- *Type:* java.lang.Number

---

##### `maxInFlightRequestsPerEndpoint`<sup>Required</sup> <a name="maxInFlightRequestsPerEndpoint" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxInFlightRequestsPerEndpoint"></a>

```java
public java.lang.Number getMaxInFlightRequestsPerEndpoint();
```

- *Type:* java.lang.Number

---

##### `maxInFlightRequestsPerInstance`<sup>Required</sup> <a name="maxInFlightRequestsPerInstance" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxInFlightRequestsPerInstance"></a>

```java
public java.lang.Number getMaxInFlightRequestsPerInstance();
```

- *Type:* java.lang.Number

---

##### `maxRate`<sup>Required</sup> <a name="maxRate" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRate"></a>

```java
public java.lang.Number getMaxRate();
```

- *Type:* java.lang.Number

---

##### `maxRatePerEndpoint`<sup>Required</sup> <a name="maxRatePerEndpoint" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerEndpoint"></a>

```java
public java.lang.Number getMaxRatePerEndpoint();
```

- *Type:* java.lang.Number

---

##### `maxRatePerInstance`<sup>Required</sup> <a name="maxRatePerInstance" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxRatePerInstance"></a>

```java
public java.lang.Number getMaxRatePerInstance();
```

- *Type:* java.lang.Number

---

##### `maxUtilization`<sup>Required</sup> <a name="maxUtilization" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.maxUtilization"></a>

```java
public java.lang.Number getMaxUtilization();
```

- *Type:* java.lang.Number

---

##### `trafficDuration`<sup>Required</sup> <a name="trafficDuration" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.trafficDuration"></a>

```java
public java.lang.String getTrafficDuration();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackendOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceBackend getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceBackend">DataGoogleComputeRegionBackendServiceBackend</a>

---


### DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList <a name="DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList;

new DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference;

new DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost">includeHost</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies">includeNamedCookies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol">includeProtocol</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString">includeQueryString</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist">queryStringBlacklist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist">queryStringWhitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `includeHost`<sup>Required</sup> <a name="includeHost" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeHost"></a>

```java
public IResolvable getIncludeHost();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `includeNamedCookies`<sup>Required</sup> <a name="includeNamedCookies" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeNamedCookies"></a>

```java
public java.util.List<java.lang.String> getIncludeNamedCookies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeProtocol`<sup>Required</sup> <a name="includeProtocol" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeProtocol"></a>

```java
public IResolvable getIncludeProtocol();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `includeQueryString`<sup>Required</sup> <a name="includeQueryString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.includeQueryString"></a>

```java
public IResolvable getIncludeQueryString();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `queryStringBlacklist`<sup>Required</sup> <a name="queryStringBlacklist" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringBlacklist"></a>

```java
public java.util.List<java.lang.String> getQueryStringBlacklist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `queryStringWhitelist`<sup>Required</sup> <a name="queryStringWhitelist" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.queryStringWhitelist"></a>

```java
public java.util.List<java.lang.String> getQueryStringWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicy</a>

---


### DataGoogleComputeRegionBackendServiceCdnPolicyList <a name="DataGoogleComputeRegionBackendServiceCdnPolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCdnPolicyList;

new DataGoogleComputeRegionBackendServiceCdnPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList <a name="DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList;

new DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference;

new DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl">ttl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.ttl"></a>

```java
public java.lang.Number getTtl();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicy</a>

---


### DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference;

new DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy">cacheKeyPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode">cacheMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl">clientTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl">maxTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching">negativeCaching</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy">negativeCachingPolicy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale">serveWhileStale</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec">signedUrlCacheMaxAgeSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy">DataGoogleComputeRegionBackendServiceCdnPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cacheKeyPolicy`<sup>Required</sup> <a name="cacheKeyPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheKeyPolicy"></a>

```java
public DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList getCacheKeyPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyCacheKeyPolicyList</a>

---

##### `cacheMode`<sup>Required</sup> <a name="cacheMode" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.cacheMode"></a>

```java
public java.lang.String getCacheMode();
```

- *Type:* java.lang.String

---

##### `clientTtl`<sup>Required</sup> <a name="clientTtl" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.clientTtl"></a>

```java
public java.lang.Number getClientTtl();
```

- *Type:* java.lang.Number

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.defaultTtl"></a>

```java
public java.lang.Number getDefaultTtl();
```

- *Type:* java.lang.Number

---

##### `maxTtl`<sup>Required</sup> <a name="maxTtl" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.maxTtl"></a>

```java
public java.lang.Number getMaxTtl();
```

- *Type:* java.lang.Number

---

##### `negativeCaching`<sup>Required</sup> <a name="negativeCaching" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCaching"></a>

```java
public IResolvable getNegativeCaching();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `negativeCachingPolicy`<sup>Required</sup> <a name="negativeCachingPolicy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.negativeCachingPolicy"></a>

```java
public DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList getNegativeCachingPolicy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList">DataGoogleComputeRegionBackendServiceCdnPolicyNegativeCachingPolicyList</a>

---

##### `serveWhileStale`<sup>Required</sup> <a name="serveWhileStale" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.serveWhileStale"></a>

```java
public java.lang.Number getServeWhileStale();
```

- *Type:* java.lang.Number

---

##### `signedUrlCacheMaxAgeSec`<sup>Required</sup> <a name="signedUrlCacheMaxAgeSec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.signedUrlCacheMaxAgeSec"></a>

```java
public java.lang.Number getSignedUrlCacheMaxAgeSec();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceCdnPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCdnPolicy">DataGoogleComputeRegionBackendServiceCdnPolicy</a>

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList;

new DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference;

new DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeout</a>

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersList <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCircuitBreakersList;

new DataGoogleComputeRegionBackendServiceCircuitBreakersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference <a name="DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference;

new DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout">connectTimeout</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections">maxConnections</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests">maxPendingRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests">maxRequests</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection">maxRequestsPerConnection</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers">DataGoogleComputeRegionBackendServiceCircuitBreakers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectTimeout`<sup>Required</sup> <a name="connectTimeout" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.connectTimeout"></a>

```java
public DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList getConnectTimeout();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList">DataGoogleComputeRegionBackendServiceCircuitBreakersConnectTimeoutList</a>

---

##### `maxConnections`<sup>Required</sup> <a name="maxConnections" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxConnections"></a>

```java
public java.lang.Number getMaxConnections();
```

- *Type:* java.lang.Number

---

##### `maxPendingRequests`<sup>Required</sup> <a name="maxPendingRequests" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxPendingRequests"></a>

```java
public java.lang.Number getMaxPendingRequests();
```

- *Type:* java.lang.Number

---

##### `maxRequests`<sup>Required</sup> <a name="maxRequests" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequests"></a>

```java
public java.lang.Number getMaxRequests();
```

- *Type:* java.lang.Number

---

##### `maxRequestsPerConnection`<sup>Required</sup> <a name="maxRequestsPerConnection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRequestsPerConnection"></a>

```java
public java.lang.Number getMaxRequestsPerConnection();
```

- *Type:* java.lang.Number

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakersOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceCircuitBreakers getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCircuitBreakers">DataGoogleComputeRegionBackendServiceCircuitBreakers</a>

---


### DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList <a name="DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList;

new DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference;

new DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends">connectionPersistenceOnUnhealthyBackends</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity">enableStrongAffinity</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec">idleTimeoutSec</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode">trackingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionPersistenceOnUnhealthyBackends`<sup>Required</sup> <a name="connectionPersistenceOnUnhealthyBackends" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.connectionPersistenceOnUnhealthyBackends"></a>

```java
public java.lang.String getConnectionPersistenceOnUnhealthyBackends();
```

- *Type:* java.lang.String

---

##### `enableStrongAffinity`<sup>Required</sup> <a name="enableStrongAffinity" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.enableStrongAffinity"></a>

```java
public IResolvable getEnableStrongAffinity();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `idleTimeoutSec`<sup>Required</sup> <a name="idleTimeoutSec" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.idleTimeoutSec"></a>

```java
public java.lang.Number getIdleTimeoutSec();
```

- *Type:* java.lang.Number

---

##### `trackingMode`<sup>Required</sup> <a name="trackingMode" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.trackingMode"></a>

```java
public java.lang.String getTrackingMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy">DataGoogleComputeRegionBackendServiceConnectionTrackingPolicy</a>

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList;

new DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference;

new DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.ttl"></a>

```java
public DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList getTtl();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookie</a>

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList;

new DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference <a name="DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference;

new DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtlOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieTtl</a>

---


### DataGoogleComputeRegionBackendServiceConsistentHashList <a name="DataGoogleComputeRegionBackendServiceConsistentHashList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConsistentHashList;

new DataGoogleComputeRegionBackendServiceConsistentHashList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceConsistentHashOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceConsistentHashOutputReference <a name="DataGoogleComputeRegionBackendServiceConsistentHashOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference;

new DataGoogleComputeRegionBackendServiceConsistentHashOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie">httpCookie</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName">httpHeaderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize">minimumRingSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash">DataGoogleComputeRegionBackendServiceConsistentHash</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `httpCookie`<sup>Required</sup> <a name="httpCookie" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpCookie"></a>

```java
public DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList getHttpCookie();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList">DataGoogleComputeRegionBackendServiceConsistentHashHttpCookieList</a>

---

##### `httpHeaderName`<sup>Required</sup> <a name="httpHeaderName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.httpHeaderName"></a>

```java
public java.lang.String getHttpHeaderName();
```

- *Type:* java.lang.String

---

##### `minimumRingSize`<sup>Required</sup> <a name="minimumRingSize" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.minimumRingSize"></a>

```java
public java.lang.Number getMinimumRingSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHashOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceConsistentHash getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceConsistentHash">DataGoogleComputeRegionBackendServiceConsistentHash</a>

---


### DataGoogleComputeRegionBackendServiceCustomMetricsList <a name="DataGoogleComputeRegionBackendServiceCustomMetricsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCustomMetricsList;

new DataGoogleComputeRegionBackendServiceCustomMetricsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference <a name="DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference;

new DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.dryRun">dryRun</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics">DataGoogleComputeRegionBackendServiceCustomMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.dryRun"></a>

```java
public IResolvable getDryRun();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetricsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceCustomMetrics getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceCustomMetrics">DataGoogleComputeRegionBackendServiceCustomMetrics</a>

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList;

new DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference;

new DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.property.proxyMode">proxyMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy">DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `proxyMode`<sup>Required</sup> <a name="proxyMode" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.property.proxyMode"></a>

```java
public java.lang.String getProxyMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy">DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxy</a>

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList;

new DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference;

new DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelection</a>

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingList <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceDynamicForwardingList;

new DataGoogleComputeRegionBackendServiceDynamicForwardingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference <a name="DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference;

new DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.forwardProxy">forwardProxy</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList">DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.ipPortSelection">ipPortSelection</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding">DataGoogleComputeRegionBackendServiceDynamicForwarding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `forwardProxy`<sup>Required</sup> <a name="forwardProxy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.forwardProxy"></a>

```java
public DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList getForwardProxy();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList">DataGoogleComputeRegionBackendServiceDynamicForwardingForwardProxyList</a>

---

##### `ipPortSelection`<sup>Required</sup> <a name="ipPortSelection" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.ipPortSelection"></a>

```java
public DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList getIpPortSelection();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList">DataGoogleComputeRegionBackendServiceDynamicForwardingIpPortSelectionList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwardingOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceDynamicForwarding getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceDynamicForwarding">DataGoogleComputeRegionBackendServiceDynamicForwarding</a>

---


### DataGoogleComputeRegionBackendServiceFailoverPolicyList <a name="DataGoogleComputeRegionBackendServiceFailoverPolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceFailoverPolicyList;

new DataGoogleComputeRegionBackendServiceFailoverPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference;

new DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover">disableConnectionDrainOnFailover</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy">dropTrafficIfUnhealthy</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio">failoverRatio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy">DataGoogleComputeRegionBackendServiceFailoverPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disableConnectionDrainOnFailover`<sup>Required</sup> <a name="disableConnectionDrainOnFailover" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.disableConnectionDrainOnFailover"></a>

```java
public IResolvable getDisableConnectionDrainOnFailover();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `dropTrafficIfUnhealthy`<sup>Required</sup> <a name="dropTrafficIfUnhealthy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.dropTrafficIfUnhealthy"></a>

```java
public IResolvable getDropTrafficIfUnhealthy();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `failoverRatio`<sup>Required</sup> <a name="failoverRatio" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.failoverRatio"></a>

```java
public java.lang.Number getFailoverRatio();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceFailoverPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceFailoverPolicy">DataGoogleComputeRegionBackendServiceFailoverPolicy</a>

---


### DataGoogleComputeRegionBackendServiceHaPolicyLeaderList <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeaderList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList;

new DataGoogleComputeRegionBackendServiceHaPolicyLeaderList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList;

new DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference;

new DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint">DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint">DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpoint</a>

---


### DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference <a name="DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference;

new DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.backendGroup">backendGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.networkEndpoint">networkEndpoint</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList">DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeader">DataGoogleComputeRegionBackendServiceHaPolicyLeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendGroup`<sup>Required</sup> <a name="backendGroup" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.backendGroup"></a>

```java
public java.lang.String getBackendGroup();
```

- *Type:* java.lang.String

---

##### `networkEndpoint`<sup>Required</sup> <a name="networkEndpoint" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.networkEndpoint"></a>

```java
public DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList getNetworkEndpoint();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList">DataGoogleComputeRegionBackendServiceHaPolicyLeaderNetworkEndpointList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceHaPolicyLeader getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeader">DataGoogleComputeRegionBackendServiceHaPolicyLeader</a>

---


### DataGoogleComputeRegionBackendServiceHaPolicyList <a name="DataGoogleComputeRegionBackendServiceHaPolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceHaPolicyList;

new DataGoogleComputeRegionBackendServiceHaPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceHaPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceHaPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceHaPolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference;

new DataGoogleComputeRegionBackendServiceHaPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.fastIpMove">fastIpMove</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.leader">leader</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList">DataGoogleComputeRegionBackendServiceHaPolicyLeaderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicy">DataGoogleComputeRegionBackendServiceHaPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fastIpMove`<sup>Required</sup> <a name="fastIpMove" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.fastIpMove"></a>

```java
public java.lang.String getFastIpMove();
```

- *Type:* java.lang.String

---

##### `leader`<sup>Required</sup> <a name="leader" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.leader"></a>

```java
public DataGoogleComputeRegionBackendServiceHaPolicyLeaderList getLeader();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyLeaderList">DataGoogleComputeRegionBackendServiceHaPolicyLeaderList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceHaPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceHaPolicy">DataGoogleComputeRegionBackendServiceHaPolicy</a>

---


### DataGoogleComputeRegionBackendServiceIapList <a name="DataGoogleComputeRegionBackendServiceIapList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceIapList;

new DataGoogleComputeRegionBackendServiceIapList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceIapOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceIapOutputReference <a name="DataGoogleComputeRegionBackendServiceIapOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceIapOutputReference;

new DataGoogleComputeRegionBackendServiceIapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId">oauth2ClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256">oauth2ClientSecretSha256</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap">DataGoogleComputeRegionBackendServiceIap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `oauth2ClientId`<sup>Required</sup> <a name="oauth2ClientId" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientId"></a>

```java
public java.lang.String getOauth2ClientId();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecret`<sup>Required</sup> <a name="oauth2ClientSecret" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecret"></a>

```java
public java.lang.String getOauth2ClientSecret();
```

- *Type:* java.lang.String

---

##### `oauth2ClientSecretSha256`<sup>Required</sup> <a name="oauth2ClientSecretSha256" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.oauth2ClientSecretSha256"></a>

```java
public java.lang.String getOauth2ClientSecretSha256();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIapOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceIap getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceIap">DataGoogleComputeRegionBackendServiceIap</a>

---


### DataGoogleComputeRegionBackendServiceLogConfigList <a name="DataGoogleComputeRegionBackendServiceLogConfigList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceLogConfigList;

new DataGoogleComputeRegionBackendServiceLogConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceLogConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceLogConfigOutputReference <a name="DataGoogleComputeRegionBackendServiceLogConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceLogConfigOutputReference;

new DataGoogleComputeRegionBackendServiceLogConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable">enable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalFields">optionalFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalMode">optionalMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate">sampleRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig">DataGoogleComputeRegionBackendServiceLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.enable"></a>

```java
public IResolvable getEnable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `optionalFields`<sup>Required</sup> <a name="optionalFields" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalFields"></a>

```java
public java.util.List<java.lang.String> getOptionalFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `optionalMode`<sup>Required</sup> <a name="optionalMode" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.optionalMode"></a>

```java
public java.lang.String getOptionalMode();
```

- *Type:* java.lang.String

---

##### `sampleRate`<sup>Required</sup> <a name="sampleRate" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.sampleRate"></a>

```java
public java.lang.Number getSampleRate();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfigOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceLogConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceLogConfig">DataGoogleComputeRegionBackendServiceLogConfig</a>

---


### DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList <a name="DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList;

new DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference <a name="DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference;

new DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.property.zonalAffinity">zonalAffinity</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList">DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy">DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `zonalAffinity`<sup>Required</sup> <a name="zonalAffinity" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.property.zonalAffinity"></a>

```java
public DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList getZonalAffinity();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList">DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy">DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicy</a>

---


### DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList <a name="DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList;

new DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference <a name="DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference;

new DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.property.spillover">spillover</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.property.spilloverRatio">spilloverRatio</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity">DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spillover`<sup>Required</sup> <a name="spillover" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.property.spillover"></a>

```java
public java.lang.String getSpillover();
```

- *Type:* java.lang.String

---

##### `spilloverRatio`<sup>Required</sup> <a name="spilloverRatio" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.property.spilloverRatio"></a>

```java
public java.lang.Number getSpilloverRatio();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinityOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity">DataGoogleComputeRegionBackendServiceNetworkPassThroughLbTrafficPolicyZonalAffinity</a>

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList;

new DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference;

new DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTime</a>

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList;

new DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference;

new DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval">DataGoogleComputeRegionBackendServiceOutlierDetectionInterval</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceOutlierDetectionInterval getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionInterval">DataGoogleComputeRegionBackendServiceOutlierDetectionInterval</a>

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionList <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceOutlierDetectionList;

new DataGoogleComputeRegionBackendServiceOutlierDetectionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference <a name="DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference;

new DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime">baseEjectionTime</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors">consecutiveErrors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure">consecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors">enforcingConsecutiveErrors</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure">enforcingConsecutiveGatewayFailure</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate">enforcingSuccessRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval">interval</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList">DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent">maxEjectionPercent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts">successRateMinimumHosts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume">successRateRequestVolume</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor">successRateStdevFactor</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection">DataGoogleComputeRegionBackendServiceOutlierDetection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseEjectionTime`<sup>Required</sup> <a name="baseEjectionTime" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.baseEjectionTime"></a>

```java
public DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList getBaseEjectionTime();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList">DataGoogleComputeRegionBackendServiceOutlierDetectionBaseEjectionTimeList</a>

---

##### `consecutiveErrors`<sup>Required</sup> <a name="consecutiveErrors" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveErrors"></a>

```java
public java.lang.Number getConsecutiveErrors();
```

- *Type:* java.lang.Number

---

##### `consecutiveGatewayFailure`<sup>Required</sup> <a name="consecutiveGatewayFailure" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.consecutiveGatewayFailure"></a>

```java
public java.lang.Number getConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveErrors`<sup>Required</sup> <a name="enforcingConsecutiveErrors" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveErrors"></a>

```java
public java.lang.Number getEnforcingConsecutiveErrors();
```

- *Type:* java.lang.Number

---

##### `enforcingConsecutiveGatewayFailure`<sup>Required</sup> <a name="enforcingConsecutiveGatewayFailure" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingConsecutiveGatewayFailure"></a>

```java
public java.lang.Number getEnforcingConsecutiveGatewayFailure();
```

- *Type:* java.lang.Number

---

##### `enforcingSuccessRate`<sup>Required</sup> <a name="enforcingSuccessRate" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.enforcingSuccessRate"></a>

```java
public java.lang.Number getEnforcingSuccessRate();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.interval"></a>

```java
public DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList getInterval();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList">DataGoogleComputeRegionBackendServiceOutlierDetectionIntervalList</a>

---

##### `maxEjectionPercent`<sup>Required</sup> <a name="maxEjectionPercent" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.maxEjectionPercent"></a>

```java
public java.lang.Number getMaxEjectionPercent();
```

- *Type:* java.lang.Number

---

##### `successRateMinimumHosts`<sup>Required</sup> <a name="successRateMinimumHosts" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateMinimumHosts"></a>

```java
public java.lang.Number getSuccessRateMinimumHosts();
```

- *Type:* java.lang.Number

---

##### `successRateRequestVolume`<sup>Required</sup> <a name="successRateRequestVolume" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateRequestVolume"></a>

```java
public java.lang.Number getSuccessRateRequestVolume();
```

- *Type:* java.lang.Number

---

##### `successRateStdevFactor`<sup>Required</sup> <a name="successRateStdevFactor" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.successRateStdevFactor"></a>

```java
public java.lang.Number getSuccessRateStdevFactor();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetectionOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceOutlierDetection getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceOutlierDetection">DataGoogleComputeRegionBackendServiceOutlierDetection</a>

---


### DataGoogleComputeRegionBackendServiceParamsList <a name="DataGoogleComputeRegionBackendServiceParamsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceParamsList;

new DataGoogleComputeRegionBackendServiceParamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceParamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceParamsOutputReference <a name="DataGoogleComputeRegionBackendServiceParamsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceParamsOutputReference;

new DataGoogleComputeRegionBackendServiceParamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.property.resourceManagerTags">resourceManagerTags</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParams">DataGoogleComputeRegionBackendServiceParams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `resourceManagerTags`<sup>Required</sup> <a name="resourceManagerTags" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.property.resourceManagerTags"></a>

```java
public StringMap getResourceManagerTags();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParamsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceParams getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceParams">DataGoogleComputeRegionBackendServiceParams</a>

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList;

new DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference;

new DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl">ttl</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.ttl"></a>

```java
public DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList getTtl();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookie</a>

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList;

new DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference <a name="DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference;

new DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos">nanos</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds">seconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nanos`<sup>Required</sup> <a name="nanos" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.nanos"></a>

```java
public java.lang.Number getNanos();
```

- *Type:* java.lang.Number

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.seconds"></a>

```java
public java.lang.Number getSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtlOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl">DataGoogleComputeRegionBackendServiceStrongSessionAffinityCookieTtl</a>

---


### DataGoogleComputeRegionBackendServiceSubsettingList <a name="DataGoogleComputeRegionBackendServiceSubsettingList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceSubsettingList;

new DataGoogleComputeRegionBackendServiceSubsettingList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceSubsettingOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceSubsettingOutputReference <a name="DataGoogleComputeRegionBackendServiceSubsettingOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceSubsettingOutputReference;

new DataGoogleComputeRegionBackendServiceSubsettingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy">policy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.subsetSize">subsetSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting">DataGoogleComputeRegionBackendServiceSubsetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.policy"></a>

```java
public java.lang.String getPolicy();
```

- *Type:* java.lang.String

---

##### `subsetSize`<sup>Required</sup> <a name="subsetSize" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.subsetSize"></a>

```java
public java.lang.Number getSubsetSize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsettingOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceSubsetting getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceSubsetting">DataGoogleComputeRegionBackendServiceSubsetting</a>

---


### DataGoogleComputeRegionBackendServiceTlsSettingsList <a name="DataGoogleComputeRegionBackendServiceTlsSettingsList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceTlsSettingsList;

new DataGoogleComputeRegionBackendServiceTlsSettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference <a name="DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference;

new DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.authenticationConfig">authenticationConfig</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.sni">sni</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.subjectAltNames">subjectAltNames</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList">DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettings">DataGoogleComputeRegionBackendServiceTlsSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationConfig`<sup>Required</sup> <a name="authenticationConfig" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.authenticationConfig"></a>

```java
public java.lang.String getAuthenticationConfig();
```

- *Type:* java.lang.String

---

##### `sni`<sup>Required</sup> <a name="sni" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.sni"></a>

```java
public java.lang.String getSni();
```

- *Type:* java.lang.String

---

##### `subjectAltNames`<sup>Required</sup> <a name="subjectAltNames" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.subjectAltNames"></a>

```java
public DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList getSubjectAltNames();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList">DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceTlsSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettings">DataGoogleComputeRegionBackendServiceTlsSettings</a>

---


### DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList <a name="DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList;

new DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.get"></a>

```java
public DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference <a name="DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_compute_region_backend_service.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference;

new DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.dnsName">dnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.uniformResourceIdentifier">uniformResourceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames">DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.dnsName"></a>

```java
public java.lang.String getDnsName();
```

- *Type:* java.lang.String

---

##### `uniformResourceIdentifier`<sup>Required</sup> <a name="uniformResourceIdentifier" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.uniformResourceIdentifier"></a>

```java
public java.lang.String getUniformResourceIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNamesOutputReference.property.internalValue"></a>

```java
public DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleComputeRegionBackendService.DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames">DataGoogleComputeRegionBackendServiceTlsSettingsSubjectAltNames</a>

---



