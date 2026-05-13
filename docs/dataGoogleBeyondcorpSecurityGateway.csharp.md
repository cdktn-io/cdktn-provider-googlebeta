# `dataGoogleBeyondcorpSecurityGateway` Submodule <a name="`dataGoogleBeyondcorpSecurityGateway` Submodule" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBeyondcorpSecurityGateway <a name="DataGoogleBeyondcorpSecurityGateway" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_beyondcorp_security_gateway google_beyondcorp_security_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGateway(Construct Scope, string Id, DataGoogleBeyondcorpSecurityGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig">DataGoogleBeyondcorpSecurityGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig">DataGoogleBeyondcorpSecurityGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleBeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleBeyondcorpSecurityGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleBeyondcorpSecurityGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleBeyondcorpSecurityGateway.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

DataGoogleBeyondcorpSecurityGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataGoogleBeyondcorpSecurityGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBeyondcorpSecurityGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBeyondcorpSecurityGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_beyondcorp_security_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleBeyondcorpSecurityGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.delegatingServiceAccount">DelegatingServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.externalIps">ExternalIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.hubs">Hubs</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList">DataGoogleBeyondcorpSecurityGatewayHubsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.logging">Logging</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList">DataGoogleBeyondcorpSecurityGatewayLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.proxyProtocolConfig">ProxyProtocolConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.serviceDiscovery">ServiceDiscovery</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput">SecurityGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DelegatingServiceAccount`<sup>Required</sup> <a name="DelegatingServiceAccount" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.delegatingServiceAccount"></a>

```csharp
public string DelegatingServiceAccount { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ExternalIps`<sup>Required</sup> <a name="ExternalIps" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.externalIps"></a>

```csharp
public string[] ExternalIps { get; }
```

- *Type:* string[]

---

##### `Hubs`<sup>Required</sup> <a name="Hubs" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.hubs"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayHubsList Hubs { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList">DataGoogleBeyondcorpSecurityGatewayHubsList</a>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Logging`<sup>Required</sup> <a name="Logging" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.logging"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayLoggingList Logging { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList">DataGoogleBeyondcorpSecurityGatewayLoggingList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProxyProtocolConfig`<sup>Required</sup> <a name="ProxyProtocolConfig" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.proxyProtocolConfig"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList ProxyProtocolConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList</a>

---

##### `ServiceDiscovery`<sup>Required</sup> <a name="ServiceDiscovery" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.serviceDiscovery"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList ServiceDiscovery { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecurityGatewayIdInput`<sup>Optional</sup> <a name="SecurityGatewayIdInput" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayIdInput"></a>

```csharp
public string SecurityGatewayIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBeyondcorpSecurityGatewayConfig <a name="DataGoogleBeyondcorpSecurityGatewayConfig" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string SecurityGatewayId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId">SecurityGatewayId</a></code> | <code>string</code> | Optional. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_beyondcorp_security_gateway#id DataGoogleBeyondcorpSecurityGateway#id}. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_beyondcorp_security_gateway#project DataGoogleBeyondcorpSecurityGateway#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.securityGatewayId"></a>

```csharp
public string SecurityGatewayId { get; set; }
```

- *Type:* string

Optional.

User-settable SecurityGateway resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_beyondcorp_security_gateway#security_gateway_id DataGoogleBeyondcorpSecurityGateway#security_gateway_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_beyondcorp_security_gateway#id DataGoogleBeyondcorpSecurityGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.32.0/docs/data-sources/google_beyondcorp_security_gateway#project DataGoogleBeyondcorpSecurityGateway#project}.

---

### DataGoogleBeyondcorpSecurityGatewayHubs <a name="DataGoogleBeyondcorpSecurityGatewayHubs" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayHubs {

};
```


### DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway <a name="DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway {

};
```


### DataGoogleBeyondcorpSecurityGatewayLogging <a name="DataGoogleBeyondcorpSecurityGatewayLogging" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayLogging {

};
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig {

};
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders {

};
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo {

};
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo {

};
```


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo {

};
```


### DataGoogleBeyondcorpSecurityGatewayServiceDiscovery <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscovery" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayServiceDiscovery {

};
```


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway {

};
```


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList <a name="DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps">AssignedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway">DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssignedIps`<sup>Required</sup> <a name="AssignedIps" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.assignedIps"></a>

```csharp
public string[] AssignedIps { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway">DataGoogleBeyondcorpSecurityGatewayHubsInternetGateway</a>

---


### DataGoogleBeyondcorpSecurityGatewayHubsList <a name="DataGoogleBeyondcorpSecurityGatewayHubsList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayHubsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayHubsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayHubsOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayHubsOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayHubsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway">InternetGateway</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList">DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs">DataGoogleBeyondcorpSecurityGatewayHubs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternetGateway`<sup>Required</sup> <a name="InternetGateway" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internetGateway"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList InternetGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList">DataGoogleBeyondcorpSecurityGatewayHubsInternetGatewayList</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayHubs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayHubs">DataGoogleBeyondcorpSecurityGatewayHubs</a>

---


### DataGoogleBeyondcorpSecurityGatewayLoggingList <a name="DataGoogleBeyondcorpSecurityGatewayLoggingList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayLoggingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging">DataGoogleBeyondcorpSecurityGatewayLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLoggingOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayLogging InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayLogging">DataGoogleBeyondcorpSecurityGatewayLogging</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfo</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfo</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo">DeviceInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo">GroupInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo">UserInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeviceInfo`<sup>Required</sup> <a name="DeviceInfo" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.deviceInfo"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList DeviceInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersDeviceInfoList</a>

---

##### `GroupInfo`<sup>Required</sup> <a name="GroupInfo" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.groupInfo"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList GroupInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersGroupInfoList</a>

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `UserInfo`<sup>Required</sup> <a name="UserInfo" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.userInfo"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList UserInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeaders</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType">OutputType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.outputType"></a>

```csharp
public string OutputType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersUserInfo</a>

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders">AllowedClientHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp">ClientIp</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders">ContextualHeaders</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity">GatewayIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders">MetadataHeaders</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedClientHeaders`<sup>Required</sup> <a name="AllowedClientHeaders" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.allowedClientHeaders"></a>

```csharp
public string[] AllowedClientHeaders { get; }
```

- *Type:* string[]

---

##### `ClientIp`<sup>Required</sup> <a name="ClientIp" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.clientIp"></a>

```csharp
public IResolvable ClientIp { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `ContextualHeaders`<sup>Required</sup> <a name="ContextualHeaders" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.contextualHeaders"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList ContextualHeaders { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigContextualHeadersList</a>

---

##### `GatewayIdentity`<sup>Required</sup> <a name="GatewayIdentity" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.gatewayIdentity"></a>

```csharp
public string GatewayIdentity { get; }
```

- *Type:* string

---

##### `MetadataHeaders`<sup>Required</sup> <a name="MetadataHeaders" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.metadataHeaders"></a>

```csharp
public StringMap MetadataHeaders { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig">DataGoogleBeyondcorpSecurityGatewayProxyProtocolConfig</a>

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride">ResourceOverride</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceOverride`<sup>Required</sup> <a name="ResourceOverride" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.resourceOverride"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList ResourceOverride { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGateway</a>

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverrideOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayResourceOverride</a>

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.get"></a>

```csharp
private DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference <a name="DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway">ApiGateway</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery">DataGoogleBeyondcorpSecurityGatewayServiceDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApiGateway`<sup>Required</sup> <a name="ApiGateway" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.apiGateway"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList ApiGateway { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList">DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryApiGatewayList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscoveryOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBeyondcorpSecurityGatewayServiceDiscovery InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.dataGoogleBeyondcorpSecurityGateway.DataGoogleBeyondcorpSecurityGatewayServiceDiscovery">DataGoogleBeyondcorpSecurityGatewayServiceDiscovery</a>

---



