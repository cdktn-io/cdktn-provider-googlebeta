# `dataGoogleOracleDatabaseExascaleDbStorageVaults` Submodule <a name="`dataGoogleOracleDatabaseExascaleDbStorageVaults` Submodule" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaults <a name="DataGoogleOracleDatabaseExascaleDbStorageVaults" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/data-sources/google_oracle_database_exascale_db_storage_vaults google_oracle_database_exascale_db_storage_vaults}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaults(Construct Scope, string Id, DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig">DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig">DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleOracleDatabaseExascaleDbStorageVaults resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleOracleDatabaseExascaleDbStorageVaults.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleOracleDatabaseExascaleDbStorageVaults.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleOracleDatabaseExascaleDbStorageVaults.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleOracleDatabaseExascaleDbStorageVaults.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleOracleDatabaseExascaleDbStorageVaults resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleOracleDatabaseExascaleDbStorageVaults to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleOracleDatabaseExascaleDbStorageVaults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/data-sources/google_oracle_database_exascale_db_storage_vaults#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleOracleDatabaseExascaleDbStorageVaults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults">ExascaleDbStorageVaults</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ExascaleDbStorageVaults`<sup>Required</sup> <a name="ExascaleDbStorageVaults" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.exascaleDbStorageVaults"></a>

```csharp
public DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList ExascaleDbStorageVaults { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaults.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Location,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.location">Location</a></code> | <code>string</code> | location. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/data-sources/google_oracle_database_exascale_db_storage_vaults#id DataGoogleOracleDatabaseExascaleDbStorageVaults#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the dataset is located. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/data-sources/google_oracle_database_exascale_db_storage_vaults#location DataGoogleOracleDatabaseExascaleDbStorageVaults#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/data-sources/google_oracle_database_exascale_db_storage_vaults#id DataGoogleOracleDatabaseExascaleDbStorageVaults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the dataset is located.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.46.0/docs/data-sources/google_oracle_database_exascale_db_storage_vaults#project DataGoogleOracleDatabaseExascaleDbStorageVaults#project}

---

### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults {

};
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties {

};
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails {

};
```


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get"></a>

```csharp
private DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionProtection">DeletionProtection</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.entitlementId">EntitlementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exadataInfrastructure">ExadataInfrastructure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exascaleDbStorageVaultId">ExascaleDbStorageVaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.gcpOracleZone">GcpOracleZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.labels">Labels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.properties">Properties</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.deletionProtection"></a>

```csharp
public IResolvable DeletionProtection { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.entitlementId"></a>

```csharp
public string EntitlementId { get; }
```

- *Type:* string

---

##### `ExadataInfrastructure`<sup>Required</sup> <a name="ExadataInfrastructure" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exadataInfrastructure"></a>

```csharp
public string ExadataInfrastructure { get; }
```

- *Type:* string

---

##### `ExascaleDbStorageVaultId`<sup>Required</sup> <a name="ExascaleDbStorageVaultId" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.exascaleDbStorageVaultId"></a>

```csharp
public string ExascaleDbStorageVaultId { get; }
```

- *Type:* string

---

##### `GcpOracleZone`<sup>Required</sup> <a name="GcpOracleZone" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.gcpOracleZone"></a>

```csharp
public string GcpOracleZone { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.properties"></a>

```csharp
public DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList Properties { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.get"></a>

```csharp
private DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs">AvailableSizeGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs">TotalSizeGbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableSizeGbs`<sup>Required</sup> <a name="AvailableSizeGbs" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.availableSizeGbs"></a>

```csharp
public double AvailableSizeGbs { get; }
```

- *Type:* double

---

##### `TotalSizeGbs`<sup>Required</sup> <a name="TotalSizeGbs" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.totalSizeGbs"></a>

```csharp
public double TotalSizeGbs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetails</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.get"></a>

```csharp
private DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.additionalFlashCachePercent">AdditionalFlashCachePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.attachedShapeAttributes">AttachedShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.availableShapeAttributes">AvailableShapeAttributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.exascaleDbStorageDetails">ExascaleDbStorageDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ocid">Ocid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ociUri">OciUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.timeZone">TimeZone</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterCount">VmClusterCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterIds">VmClusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalFlashCachePercent`<sup>Required</sup> <a name="AdditionalFlashCachePercent" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.additionalFlashCachePercent"></a>

```csharp
public double AdditionalFlashCachePercent { get; }
```

- *Type:* double

---

##### `AttachedShapeAttributes`<sup>Required</sup> <a name="AttachedShapeAttributes" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.attachedShapeAttributes"></a>

```csharp
public string[] AttachedShapeAttributes { get; }
```

- *Type:* string[]

---

##### `AvailableShapeAttributes`<sup>Required</sup> <a name="AvailableShapeAttributes" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.availableShapeAttributes"></a>

```csharp
public string[] AvailableShapeAttributes { get; }
```

- *Type:* string[]

---

##### `ExascaleDbStorageDetails`<sup>Required</sup> <a name="ExascaleDbStorageDetails" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.exascaleDbStorageDetails"></a>

```csharp
public DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList ExascaleDbStorageDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesExascaleDbStorageDetailsList</a>

---

##### `Ocid`<sup>Required</sup> <a name="Ocid" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ocid"></a>

```csharp
public string Ocid { get; }
```

- *Type:* string

---

##### `OciUri`<sup>Required</sup> <a name="OciUri" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.ociUri"></a>

```csharp
public string OciUri { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.timeZone"></a>

```csharp
public DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList TimeZone { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList</a>

---

##### `VmClusterCount`<sup>Required</sup> <a name="VmClusterCount" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterCount"></a>

```csharp
public double VmClusterCount { get; }
```

- *Type:* double

---

##### `VmClusterIds`<sup>Required</sup> <a name="VmClusterIds" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.vmClusterIds"></a>

```csharp
public string[] VmClusterIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsProperties</a>

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.get"></a>

```csharp
private DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference <a name="DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZoneOutputReference.property.internalValue"></a>

```csharp
public DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleOracleDatabaseExascaleDbStorageVaults.DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone">DataGoogleOracleDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsPropertiesTimeZone</a>

---



