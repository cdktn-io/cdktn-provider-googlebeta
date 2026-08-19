# `dataGoogleStorageControlProjectIntelligenceFindingsSummary` Submodule <a name="`dataGoogleStorageControlProjectIntelligenceFindingsSummary` Submodule" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsSummary <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummary" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/data-sources/google_storage_control_project_intelligence_findings_summary google_storage_control_project_intelligence_findings_summary}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceFindingsSummary(Construct Scope, string Id, DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig">DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig">DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetResourceScope">ResetResourceScope</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetResourceScope` <a name="ResetResourceScope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.resetResourceScope"></a>

```csharp
private void ResetResourceScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleStorageControlProjectIntelligenceFindingsSummary.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleStorageControlProjectIntelligenceFindingsSummary.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleStorageControlProjectIntelligenceFindingsSummary.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleStorageControlProjectIntelligenceFindingsSummary.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleStorageControlProjectIntelligenceFindingsSummary resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageControlProjectIntelligenceFindingsSummary to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageControlProjectIntelligenceFindingsSummary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/data-sources/google_storage_control_project_intelligence_findings_summary#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlProjectIntelligenceFindingsSummary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.findingSummaries">FindingSummaries</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScopeInput">ResourceScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScope">ResourceScope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `FindingSummaries`<sup>Required</sup> <a name="FindingSummaries" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.findingSummaries"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList FindingSummaries { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ResourceScopeInput`<sup>Optional</sup> <a name="ResourceScopeInput" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScopeInput"></a>

```csharp
public string ResourceScopeInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ResourceScope`<sup>Required</sup> <a name="ResourceScope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.resourceScope"></a>

```csharp
public string ResourceScope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummary.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Filter = null,
    string Id = null,
    string Location = null,
    string Project = null,
    string ResourceScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.filter">Filter</a></code> | <code>string</code> | The filter expression. Supports filtering by FindingType. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/data-sources/google_storage_control_project_intelligence_findings_summary#id DataGoogleStorageControlProjectIntelligenceFindingsSummary#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.location">Location</a></code> | <code>string</code> | The location of the intelligence findings summary. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.resourceScope">ResourceScope</a></code> | <code>string</code> | Determines the granularity of the findings when the parent is an organization or folder. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter expression. Supports filtering by FindingType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/data-sources/google_storage_control_project_intelligence_findings_summary#filter DataGoogleStorageControlProjectIntelligenceFindingsSummary#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/data-sources/google_storage_control_project_intelligence_findings_summary#id DataGoogleStorageControlProjectIntelligenceFindingsSummary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the intelligence findings summary.

Currently default value is global and users cannot use for input for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/data-sources/google_storage_control_project_intelligence_findings_summary#location DataGoogleStorageControlProjectIntelligenceFindingsSummary#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/data-sources/google_storage_control_project_intelligence_findings_summary#project DataGoogleStorageControlProjectIntelligenceFindingsSummary#project}

---

##### `ResourceScope`<sup>Optional</sup> <a name="ResourceScope" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryConfig.property.resourceScope"></a>

```csharp
public string ResourceScope { get; set; }
```

- *Type:* string

Determines the granularity of the findings when the parent is an organization or folder.

Possible values are PARENT and PROJECT. Default value is PARENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.45.0/docs/data-sources/google_storage_control_project_intelligence_findings_summary#resource_scope DataGoogleStorageControlProjectIntelligenceFindingsSummary#resource_scope}

---

### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries {

};
```


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity">Severity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails">SummaryDetails</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource">TargetResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.severity"></a>

```csharp
public string Severity { get; }
```

- *Type:* string

---

##### `SummaryDetails`<sup>Required</sup> <a name="SummaryDetails" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.summaryDetails"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList SummaryDetails { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList</a>

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.targetResource"></a>

```csharp
public string TargetResource { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummaries</a>

---


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get"></a>

```csharp
private DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference <a name="DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count">Count</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.count"></a>

```csharp
public string Count { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetailsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleStorageControlProjectIntelligenceFindingsSummary.DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails">DataGoogleStorageControlProjectIntelligenceFindingsSummaryFindingSummariesSummaryDetails</a>

---



