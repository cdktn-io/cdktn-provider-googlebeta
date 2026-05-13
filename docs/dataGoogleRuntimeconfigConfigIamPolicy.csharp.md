# `dataGoogleRuntimeconfigConfigIamPolicy` Submodule <a name="`dataGoogleRuntimeconfigConfigIamPolicy` Submodule" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleRuntimeconfigConfigIamPolicy <a name="DataGoogleRuntimeconfigConfigIamPolicy" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_runtimeconfig_config_iam_policy google_runtimeconfig_config_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleRuntimeconfigConfigIamPolicy(Construct Scope, string Id, DataGoogleRuntimeconfigConfigIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig">DataGoogleRuntimeconfigConfigIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig">DataGoogleRuntimeconfigConfigIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleRuntimeconfigConfigIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleRuntimeconfigConfigIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleRuntimeconfigConfigIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleRuntimeconfigConfigIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleRuntimeconfigConfigIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleRuntimeconfigConfigIamPolicy resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleRuntimeconfigConfigIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleRuntimeconfigConfigIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_runtimeconfig_config_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleRuntimeconfigConfigIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.configInput">ConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.config">Config</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.configInput"></a>

```csharp
public string ConfigInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.config"></a>

```csharp
public string Config { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleRuntimeconfigConfigIamPolicyConfig <a name="DataGoogleRuntimeconfigConfigIamPolicyConfig" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleRuntimeconfigConfigIamPolicyConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Config,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.config">Config</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_runtimeconfig_config_iam_policy#config DataGoogleRuntimeconfigConfigIamPolicy#config}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_runtimeconfig_config_iam_policy#id DataGoogleRuntimeconfigConfigIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_runtimeconfig_config_iam_policy#project DataGoogleRuntimeconfigConfigIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.config"></a>

```csharp
public string Config { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_runtimeconfig_config_iam_policy#config DataGoogleRuntimeconfigConfigIamPolicy#config}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_runtimeconfig_config_iam_policy#id DataGoogleRuntimeconfigConfigIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleRuntimeconfigConfigIamPolicy.DataGoogleRuntimeconfigConfigIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_runtimeconfig_config_iam_policy#project DataGoogleRuntimeconfigConfigIamPolicy#project}.

---



