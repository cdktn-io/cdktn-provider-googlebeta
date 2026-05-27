# `dataGoogleVmwareengineUpgrades` Submodule <a name="`dataGoogleVmwareengineUpgrades` Submodule" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineUpgrades <a name="DataGoogleVmwareengineUpgrades" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_vmwareengine_upgrades google_vmwareengine_upgrades}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgrades(Construct Scope, string Id, DataGoogleVmwareengineUpgradesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig">DataGoogleVmwareengineUpgradesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig">DataGoogleVmwareengineUpgradesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleVmwareengineUpgrades resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleVmwareengineUpgrades.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleVmwareengineUpgrades.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleVmwareengineUpgrades.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleVmwareengineUpgrades.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleVmwareengineUpgrades resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineUpgrades to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineUpgrades that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_vmwareengine_upgrades#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineUpgrades to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.upgrades">Upgrades</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList">DataGoogleVmwareengineUpgradesUpgradesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Upgrades`<sup>Required</sup> <a name="Upgrades" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.upgrades"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesList Upgrades { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList">DataGoogleVmwareengineUpgradesUpgradesList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgrades.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineUpgradesConfig <a name="DataGoogleVmwareengineUpgradesConfig" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Parent,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.parent">Parent</a></code> | <code>string</code> | The resource name of the private cloud for which upgrades will be listed. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_vmwareengine_upgrades#id DataGoogleVmwareengineUpgrades#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the specific Upgrade to retrieve. If provided, the 'upgrades' list will contain only this upgrade. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The resource name of the private cloud for which upgrades will be listed.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_vmwareengine_upgrades#parent DataGoogleVmwareengineUpgrades#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_vmwareengine_upgrades#id DataGoogleVmwareengineUpgrades#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the specific Upgrade to retrieve. If provided, the 'upgrades' list will contain only this upgrade.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.33.0/docs/data-sources/google_vmwareengine_upgrades#name DataGoogleVmwareengineUpgrades#name}

---

### DataGoogleVmwareengineUpgradesUpgrades <a name="DataGoogleVmwareengineUpgradesUpgrades" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgrades {

};
```


### DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades <a name="DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades {

};
```


### DataGoogleVmwareengineUpgradesUpgradesSchedule <a name="DataGoogleVmwareengineUpgradesUpgradesSchedule" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesSchedule {

};
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints {

};
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals {

};
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime {

};
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime {

};
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange {

};
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow {

};
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows {

};
```


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList <a name="DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.componentType">ComponentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades">DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.componentType"></a>

```csharp
public string ComponentType { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades">DataGoogleVmwareengineUpgradesUpgradesComponentUpgrades</a>

---


### DataGoogleVmwareengineUpgradesUpgradesList <a name="DataGoogleVmwareengineUpgradesUpgradesList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.componentUpgrades">ComponentUpgrades</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList">DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.estimatedDuration">EstimatedDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList">DataGoogleVmwareengineUpgradesUpgradesScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.startVersion">StartVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.targetVersion">TargetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades">DataGoogleVmwareengineUpgradesUpgrades</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComponentUpgrades`<sup>Required</sup> <a name="ComponentUpgrades" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.componentUpgrades"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList ComponentUpgrades { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList">DataGoogleVmwareengineUpgradesUpgradesComponentUpgradesList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `EstimatedDuration`<sup>Required</sup> <a name="EstimatedDuration" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.estimatedDuration"></a>

```csharp
public string EstimatedDuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.schedule"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleList Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList">DataGoogleVmwareengineUpgradesUpgradesScheduleList</a>

---

##### `StartVersion`<sup>Required</sup> <a name="StartVersion" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.startVersion"></a>

```csharp
public string StartVersion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.targetVersion"></a>

```csharp
public string TargetVersion { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgrades InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgrades">DataGoogleVmwareengineUpgradesUpgrades</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTime</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endDay">EndDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endTime">EndTime</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startDay">StartDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDay`<sup>Required</sup> <a name="EndDay" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endDay"></a>

```csharp
public string EndDay { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.endTime"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList EndTime { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsEndTimeList</a>

---

##### `StartDay`<sup>Required</sup> <a name="StartDay" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startDay"></a>

```csharp
public string StartDay { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.startTime"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervals</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTimeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsStartTime</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.disallowedIntervals">DisallowedIntervals</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursDay">MinHoursDay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursWeek">MinHoursWeek</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.rescheduleDateRange">RescheduleDateRange</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisallowedIntervals`<sup>Required</sup> <a name="DisallowedIntervals" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.disallowedIntervals"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList DisallowedIntervals { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsDisallowedIntervalsList</a>

---

##### `MinHoursDay`<sup>Required</sup> <a name="MinHoursDay" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursDay"></a>

```csharp
public double MinHoursDay { get; }
```

- *Type:* double

---

##### `MinHoursWeek`<sup>Required</sup> <a name="MinHoursWeek" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.minHoursWeek"></a>

```csharp
public double MinHoursWeek { get; }
```

- *Type:* double

---

##### `RescheduleDateRange`<sup>Required</sup> <a name="RescheduleDateRange" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.rescheduleDateRange"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList RescheduleDateRange { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraints</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRangeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsRescheduleDateRange</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindow</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.constraints">Constraints</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.editWindow">EditWindow</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.lastEditor">LastEditor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.weeklyWindows">WeeklyWindows</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule">DataGoogleVmwareengineUpgradesUpgradesSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Constraints`<sup>Required</sup> <a name="Constraints" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.constraints"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList Constraints { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList">DataGoogleVmwareengineUpgradesUpgradesScheduleConstraintsList</a>

---

##### `EditWindow`<sup>Required</sup> <a name="EditWindow" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.editWindow"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList EditWindow { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList">DataGoogleVmwareengineUpgradesUpgradesScheduleEditWindowList</a>

---

##### `LastEditor`<sup>Required</sup> <a name="LastEditor" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.lastEditor"></a>

```csharp
public string LastEditor { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `WeeklyWindows`<sup>Required</sup> <a name="WeeklyWindows" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.weeklyWindows"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList WeeklyWindows { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesSchedule">DataGoogleVmwareengineUpgradesUpgradesSchedule</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.startTime"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindows</a>

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.get"></a>

```csharp
private DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference <a name="DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTimeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleVmwareengineUpgrades.DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime">DataGoogleVmwareengineUpgradesUpgradesScheduleWeeklyWindowsStartTime</a>

---



