# `dataGoogleStorageControlProjectIntelligenceFindings` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFindings` Submodule" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFindings <a name="DataGoogleStorageControlProjectIntelligenceFindings" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings google_storage_control_project_intelligence_findings}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindings;

DataGoogleStorageControlProjectIntelligenceFindings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .pageSize(java.lang.Number)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.filter">filter</a></code> | <code>java.lang.String</code> | The filter expression to apply. Supports filtering by type and associated_resources. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#id DataGoogleStorageControlProjectIntelligenceFindings#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the intelligence findings. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | The maximum number of IntelligenceFinding resources to return. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.filter"></a>

- *Type:* java.lang.String

The filter expression to apply. Supports filtering by type and associated_resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#filter DataGoogleStorageControlProjectIntelligenceFindings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#id DataGoogleStorageControlProjectIntelligenceFindings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the intelligence findings. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#location DataGoogleStorageControlProjectIntelligenceFindings#location}

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

The maximum number of IntelligenceFinding resources to return.

The maximum value is 100; values greater than 100 become 100. The default value is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#page_size DataGoogleStorageControlProjectIntelligenceFindings#page_size}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#project DataGoogleStorageControlProjectIntelligenceFindings#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindings resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindings;

DataGoogleStorageControlProjectIntelligenceFindings.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindings;

DataGoogleStorageControlProjectIntelligenceFindings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindings;

DataGoogleStorageControlProjectIntelligenceFindings.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindings;

DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindings resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleStorageControlProjectIntelligenceFindings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.findings">findings</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `findings`<sup>Required</sup> <a name="findings" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.findings"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsList getFindings();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingsConfig" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsConfig;

DataGoogleStorageControlProjectIntelligenceFindingsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .filter(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .pageSize(java.lang.Number)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter expression to apply. Supports filtering by type and associated_resources. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#id DataGoogleStorageControlProjectIntelligenceFindings#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the intelligence findings. Currently default value is global and users cannot use for input for now. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | The maximum number of IntelligenceFinding resources to return. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter expression to apply. Supports filtering by type and associated_resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#filter DataGoogleStorageControlProjectIntelligenceFindings#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#id DataGoogleStorageControlProjectIntelligenceFindings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the intelligence findings. Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#location DataGoogleStorageControlProjectIntelligenceFindings#location}

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

The maximum number of IntelligenceFinding resources to return.

The maximum value is 100; values greater than 100 become 100. The default value is 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#page_size DataGoogleStorageControlProjectIntelligenceFindings#page_size}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.37.0/docs/data-sources/google_storage_control_project_intelligence_findings#project DataGoogleStorageControlProjectIntelligenceFindings#project}

---

### DataGoogleStorageControlProjectIntelligenceFindingsFindings <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindings" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindings.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindings;

DataGoogleStorageControlProjectIntelligenceFindingsFindings.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes.builder()
    .build();
```


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError;

DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets">topBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `topBuckets`<sup>Required</sup> <a name="topBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.topBuckets"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList getTopBuckets();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList</a>

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.totalOperationsCount"></a>

```java
public java.lang.String getTotalOperationsCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes">topPrefixes</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topPrefixes`<sup>Required</sup> <a name="topPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList getTopPrefixes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```java
public java.lang.String getThrottledRequests();
```

- *Type:* java.lang.String

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```java
public java.lang.String getTotalEgressBytes();
```

- *Type:* java.lang.String

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```java
public java.lang.String getTotalOperationsCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">totalStorageGrowthBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.contribution"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList getContribution();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.error"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsErrorList</a>

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```java
public java.lang.String getThrottledRequests();
```

- *Type:* java.lang.String

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```java
public java.lang.String getTotalEgressBytes();
```

- *Type:* java.lang.String

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```java
public java.lang.String getTotalOperationsCount();
```

- *Type:* java.lang.String

---

##### `totalStorageGrowthBytes`<sup>Required</sup> <a name="totalStorageGrowthBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```java
public java.lang.String getTotalStorageGrowthBytes();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBucketsOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.topBuckets">topBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `topBuckets`<sup>Required</sup> <a name="topBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.topBuckets"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList getTopBuckets();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList</a>

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.totalEgressBytes"></a>

```java
public java.lang.String getTotalEgressBytes();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes">topPrefixes</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topPrefixes`<sup>Required</sup> <a name="topPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList getTopPrefixes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```java
public java.lang.String getThrottledRequests();
```

- *Type:* java.lang.String

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```java
public java.lang.String getTotalEgressBytes();
```

- *Type:* java.lang.String

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```java
public java.lang.String getTotalOperationsCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">totalStorageGrowthBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.contribution"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList getContribution();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.error"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsErrorList</a>

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```java
public java.lang.String getThrottledRequests();
```

- *Type:* java.lang.String

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```java
public java.lang.String getTotalEgressBytes();
```

- *Type:* java.lang.String

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```java
public java.lang.String getTotalOperationsCount();
```

- *Type:* java.lang.String

---

##### `totalStorageGrowthBytes`<sup>Required</sup> <a name="totalStorageGrowthBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```java
public java.lang.String getTotalStorageGrowthBytes();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBucketsOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.endTime">endTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.endTime"></a>

```java
public java.lang.String getEndTime();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod">DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriod</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.associatedResources">associatedResources</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.coldlineAndArchivalStorageOperationsSpike">coldlineAndArchivalStorageOperationsSpike</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.crossRegionEgressSpike">crossRegionEgressSpike</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.observationPeriod">observationPeriod</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.severity">severity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.storageGrowthAboveTrend">storageGrowthAboveTrend</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.targetResource">targetResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.throttledRequestsSpike">throttledRequestsSpike</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindings">DataGoogleStorageControlProjectIntelligenceFindingsFindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `associatedResources`<sup>Required</sup> <a name="associatedResources" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.associatedResources"></a>

```java
public java.util.List<java.lang.String> getAssociatedResources();
```

- *Type:* java.util.List<java.lang.String>

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `coldlineAndArchivalStorageOperationsSpike`<sup>Required</sup> <a name="coldlineAndArchivalStorageOperationsSpike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.coldlineAndArchivalStorageOperationsSpike"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList getColdlineAndArchivalStorageOperationsSpike();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsColdlineAndArchivalStorageOperationsSpikeList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `crossRegionEgressSpike`<sup>Required</sup> <a name="crossRegionEgressSpike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.crossRegionEgressSpike"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList getCrossRegionEgressSpike();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsCrossRegionEgressSpikeList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `observationPeriod`<sup>Required</sup> <a name="observationPeriod" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.observationPeriod"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList getObservationPeriod();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsObservationPeriodList</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.severity"></a>

```java
public java.lang.String getSeverity();
```

- *Type:* java.lang.String

---

##### `storageGrowthAboveTrend`<sup>Required</sup> <a name="storageGrowthAboveTrend" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.storageGrowthAboveTrend"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList getStorageGrowthAboveTrend();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList</a>

---

##### `targetResource`<sup>Required</sup> <a name="targetResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.targetResource"></a>

```java
public java.lang.String getTargetResource();
```

- *Type:* java.lang.String

---

##### `throttledRequestsSpike`<sup>Required</sup> <a name="throttledRequestsSpike" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.throttledRequestsSpike"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList getThrottledRequestsSpike();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindings">DataGoogleStorageControlProjectIntelligenceFindingsFindings</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.topBuckets">topBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes">totalStorageGrowthBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `topBuckets`<sup>Required</sup> <a name="topBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.topBuckets"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList getTopBuckets();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList</a>

---

##### `totalStorageGrowthBytes`<sup>Required</sup> <a name="totalStorageGrowthBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.totalStorageGrowthBytes"></a>

```java
public java.lang.String getTotalStorageGrowthBytes();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrend</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes">topPrefixes</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topPrefixes`<sup>Required</sup> <a name="topPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.topPrefixes"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList getTopPrefixes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```java
public java.lang.String getThrottledRequests();
```

- *Type:* java.lang.String

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```java
public java.lang.String getTotalEgressBytes();
```

- *Type:* java.lang.String

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```java
public java.lang.String getTotalOperationsCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes">totalStorageGrowthBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.contribution"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList getContribution();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.error"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsErrorList</a>

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.throttledRequests"></a>

```java
public java.lang.String getThrottledRequests();
```

- *Type:* java.lang.String

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalEgressBytes"></a>

```java
public java.lang.String getTotalEgressBytes();
```

- *Type:* java.lang.String

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalOperationsCount"></a>

```java
public java.lang.String getTotalOperationsCount();
```

- *Type:* java.lang.String

---

##### `totalStorageGrowthBytes`<sup>Required</sup> <a name="totalStorageGrowthBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```java
public java.lang.String getTotalStorageGrowthBytes();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBucketsOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsStorageGrowthAboveTrendTopBuckets</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.topBuckets">topBuckets</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.throttledRequests"></a>

```java
public java.lang.String getThrottledRequests();
```

- *Type:* java.lang.String

---

##### `topBuckets`<sup>Required</sup> <a name="topBuckets" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.topBuckets"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList getTopBuckets();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpike</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes">topPrefixes</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `topPrefixes`<sup>Required</sup> <a name="topPrefixes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.topPrefixes"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList getTopPrefixes();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContribution</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.throttledRequests"></a>

```java
public java.lang.String getThrottledRequests();
```

- *Type:* java.lang.String

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalEgressBytes"></a>

```java
public java.lang.String getTotalEgressBytes();
```

- *Type:* java.lang.String

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.totalOperationsCount"></a>

```java
public java.lang.String getTotalOperationsCount();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixesOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionTopPrefixes</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsError</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.get"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_storage_control_project_intelligence_findings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference;

new DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.contribution">contribution</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.error">error</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease">percentageIncrease</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests">throttledRequests</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes">totalEgressBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount">totalOperationsCount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes">totalStorageGrowthBytes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `contribution`<sup>Required</sup> <a name="contribution" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.contribution"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList getContribution();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsContributionList</a>

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.error"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsErrorList</a>

---

##### `percentageIncrease`<sup>Required</sup> <a name="percentageIncrease" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.percentageIncrease"></a>

```java
public java.lang.Number getPercentageIncrease();
```

- *Type:* java.lang.Number

---

##### `throttledRequests`<sup>Required</sup> <a name="throttledRequests" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.throttledRequests"></a>

```java
public java.lang.String getThrottledRequests();
```

- *Type:* java.lang.String

---

##### `totalEgressBytes`<sup>Required</sup> <a name="totalEgressBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalEgressBytes"></a>

```java
public java.lang.String getTotalEgressBytes();
```

- *Type:* java.lang.String

---

##### `totalOperationsCount`<sup>Required</sup> <a name="totalOperationsCount" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalOperationsCount"></a>

```java
public java.lang.String getTotalOperationsCount();
```

- *Type:* java.lang.String

---

##### `totalStorageGrowthBytes`<sup>Required</sup> <a name="totalStorageGrowthBytes" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.totalStorageGrowthBytes"></a>

```java
public java.lang.String getTotalStorageGrowthBytes();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBucketsOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindings.DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets">DataGoogleStorageControlProjectIntelligenceFindingsFindingsThrottledRequestsSpikeTopBuckets</a>

---



