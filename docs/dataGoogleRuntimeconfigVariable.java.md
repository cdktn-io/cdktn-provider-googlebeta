# `dataGoogleRuntimeconfigVariable` Submodule <a name="`dataGoogleRuntimeconfigVariable` Submodule" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleRuntimeconfigVariable <a name="DataGoogleRuntimeconfigVariable" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable google_runtimeconfig_variable}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_runtimeconfig_variable.DataGoogleRuntimeconfigVariable;

DataGoogleRuntimeconfigVariable.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .parent(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the variable to manage. Note that variable names can be hierarchical using slashes (e.g. "prod-variables/hostname"). |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | The name of the RuntimeConfig resource containing this variable. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#id DataGoogleRuntimeconfigVariable#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the variable to manage. Note that variable names can be hierarchical using slashes (e.g. "prod-variables/hostname").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#name DataGoogleRuntimeconfigVariable#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

The name of the RuntimeConfig resource containing this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#parent DataGoogleRuntimeconfigVariable#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#id DataGoogleRuntimeconfigVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#project DataGoogleRuntimeconfigVariable#project}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleRuntimeconfigVariable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isConstruct"></a>

```java
import io.cdktn.providers.google_beta.data_google_runtimeconfig_variable.DataGoogleRuntimeconfigVariable;

DataGoogleRuntimeconfigVariable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformElement"></a>

```java
import io.cdktn.providers.google_beta.data_google_runtimeconfig_variable.DataGoogleRuntimeconfigVariable;

DataGoogleRuntimeconfigVariable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google_beta.data_google_runtimeconfig_variable.DataGoogleRuntimeconfigVariable;

DataGoogleRuntimeconfigVariable.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport"></a>

```java
import io.cdktn.providers.google_beta.data_google_runtimeconfig_variable.DataGoogleRuntimeconfigVariable;

DataGoogleRuntimeconfigVariable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleRuntimeconfigVariable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleRuntimeconfigVariable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleRuntimeconfigVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleRuntimeconfigVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleRuntimeconfigVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleRuntimeconfigVariableConfig <a name="DataGoogleRuntimeconfigVariableConfig" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.Initializer"></a>

```java
import io.cdktn.providers.google_beta.data_google_runtimeconfig_variable.DataGoogleRuntimeconfigVariableConfig;

DataGoogleRuntimeconfigVariableConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .parent(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the variable to manage. Note that variable names can be hierarchical using slashes (e.g. "prod-variables/hostname"). |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | The name of the RuntimeConfig resource containing this variable. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#id DataGoogleRuntimeconfigVariable#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.project">project</a></code> | <code>java.lang.String</code> | The ID of the project in which the resource belongs. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the variable to manage. Note that variable names can be hierarchical using slashes (e.g. "prod-variables/hostname").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#name DataGoogleRuntimeconfigVariable#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

The name of the RuntimeConfig resource containing this variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#parent DataGoogleRuntimeconfigVariable#parent}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#id DataGoogleRuntimeconfigVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigVariable.DataGoogleRuntimeconfigVariableConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.34.0/docs/data-sources/google_runtimeconfig_variable#project DataGoogleRuntimeconfigVariable#project}

---



