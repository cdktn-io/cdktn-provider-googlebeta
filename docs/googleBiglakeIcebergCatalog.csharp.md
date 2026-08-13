# `googleBiglakeIcebergCatalog` Submodule <a name="`googleBiglakeIcebergCatalog` Submodule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBiglakeIcebergCatalog <a name="GoogleBiglakeIcebergCatalog" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog google_biglake_iceberg_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalog(Construct Scope, string Id, GoogleBiglakeIcebergCatalogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig">GoogleBiglakeIcebergCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig">GoogleBiglakeIcebergCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions">PutFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putRestrictedLocationsConfig">PutRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetCredentialMode">ResetCredentialMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDefaultLocation">ResetDefaultLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetFederatedCatalogOptions">ResetFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetPrimaryLocation">ResetPrimaryLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetRestrictedLocationsConfig">ResetRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFederatedCatalogOptions` <a name="PutFederatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions"></a>

```csharp
private void PutFederatedCatalogOptions(GoogleBiglakeIcebergCatalogFederatedCatalogOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putFederatedCatalogOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

---

##### `PutRestrictedLocationsConfig` <a name="PutRestrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putRestrictedLocationsConfig"></a>

```csharp
private void PutRestrictedLocationsConfig(GoogleBiglakeIcebergCatalogRestrictedLocationsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putRestrictedLocationsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBiglakeIcebergCatalogTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

---

##### `ResetCredentialMode` <a name="ResetCredentialMode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetCredentialMode"></a>

```csharp
private void ResetCredentialMode()
```

##### `ResetDefaultLocation` <a name="ResetDefaultLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDefaultLocation"></a>

```csharp
private void ResetDefaultLocation()
```

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDeletionPolicy"></a>

```csharp
private void ResetDeletionPolicy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFederatedCatalogOptions` <a name="ResetFederatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetFederatedCatalogOptions"></a>

```csharp
private void ResetFederatedCatalogOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrimaryLocation` <a name="ResetPrimaryLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetPrimaryLocation"></a>

```csharp
private void ResetPrimaryLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRestrictedLocationsConfig` <a name="ResetRestrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetRestrictedLocationsConfig"></a>

```csharp
private void ResetRestrictedLocationsConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GoogleBiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeIcebergCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeIcebergCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeIcebergCatalog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

GoogleBiglakeIcebergCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a GoogleBiglakeIcebergCatalog resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBiglakeIcebergCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBiglakeIcebergCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the GoogleBiglakeIcebergCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccount">BiglakeServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccountId">BiglakeServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptions">FederatedCatalogOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.replicas">Replicas</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList">GoogleBiglakeIcebergCatalogReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfig">RestrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.storageRegions">StorageRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference">GoogleBiglakeIcebergCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogTypeInput">CatalogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialModeInput">CredentialModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocationInput">DefaultLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptionsInput">FederatedCatalogOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocationInput">PrimaryLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfigInput">RestrictedLocationsConfigInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeoutsInput">TimeoutsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogType">CatalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialMode">CredentialMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocation">DefaultLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocation">PrimaryLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BiglakeServiceAccount`<sup>Required</sup> <a name="BiglakeServiceAccount" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccount"></a>

```csharp
public string BiglakeServiceAccount { get; }
```

- *Type:* string

---

##### `BiglakeServiceAccountId`<sup>Required</sup> <a name="BiglakeServiceAccountId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.biglakeServiceAccountId"></a>

```csharp
public string BiglakeServiceAccountId { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `FederatedCatalogOptions`<sup>Required</sup> <a name="FederatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptions"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference FederatedCatalogOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference</a>

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.replicas"></a>

```csharp
public GoogleBiglakeIcebergCatalogReplicasList Replicas { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList">GoogleBiglakeIcebergCatalogReplicasList</a>

---

##### `RestrictedLocationsConfig`<sup>Required</sup> <a name="RestrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfig"></a>

```csharp
public GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference RestrictedLocationsConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference">GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference</a>

---

##### `StorageRegions`<sup>Required</sup> <a name="StorageRegions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.storageRegions"></a>

```csharp
public string[] StorageRegions { get; }
```

- *Type:* string[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeouts"></a>

```csharp
public GoogleBiglakeIcebergCatalogTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference">GoogleBiglakeIcebergCatalogTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CatalogTypeInput`<sup>Optional</sup> <a name="CatalogTypeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogTypeInput"></a>

```csharp
public string CatalogTypeInput { get; }
```

- *Type:* string

---

##### `CredentialModeInput`<sup>Optional</sup> <a name="CredentialModeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialModeInput"></a>

```csharp
public string CredentialModeInput { get; }
```

- *Type:* string

---

##### `DefaultLocationInput`<sup>Optional</sup> <a name="DefaultLocationInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocationInput"></a>

```csharp
public string DefaultLocationInput { get; }
```

- *Type:* string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicyInput"></a>

```csharp
public string DeletionPolicyInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FederatedCatalogOptionsInput`<sup>Optional</sup> <a name="FederatedCatalogOptionsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.federatedCatalogOptionsInput"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptions FederatedCatalogOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryLocationInput`<sup>Optional</sup> <a name="PrimaryLocationInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocationInput"></a>

```csharp
public string PrimaryLocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RestrictedLocationsConfigInput`<sup>Optional</sup> <a name="RestrictedLocationsConfigInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.restrictedLocationsConfigInput"></a>

```csharp
public GoogleBiglakeIcebergCatalogRestrictedLocationsConfig RestrictedLocationsConfigInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.timeoutsInput"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergCatalogTimeouts TimeoutsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.catalogType"></a>

```csharp
public string CatalogType { get; }
```

- *Type:* string

---

##### `CredentialMode`<sup>Required</sup> <a name="CredentialMode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.credentialMode"></a>

```csharp
public string CredentialMode { get; }
```

- *Type:* string

---

##### `DefaultLocation`<sup>Required</sup> <a name="DefaultLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.defaultLocation"></a>

```csharp
public string DefaultLocation { get; }
```

- *Type:* string

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryLocation`<sup>Required</sup> <a name="PrimaryLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.primaryLocation"></a>

```csharp
public string PrimaryLocation { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBiglakeIcebergCatalogConfig <a name="GoogleBiglakeIcebergCatalogConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CatalogType,
    string Name,
    string CredentialMode = null,
    string DefaultLocation = null,
    string DeletionPolicy = null,
    string Description = null,
    GoogleBiglakeIcebergCatalogFederatedCatalogOptions FederatedCatalogOptions = null,
    string Id = null,
    string PrimaryLocation = null,
    string Project = null,
    GoogleBiglakeIcebergCatalogRestrictedLocationsConfig RestrictedLocationsConfig = null,
    GoogleBiglakeIcebergCatalogTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.catalogType">CatalogType</a></code> | <code>string</code> | The catalog type of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.name">Name</a></code> | <code>string</code> | The name of the IcebergCatalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.credentialMode">CredentialMode</a></code> | <code>string</code> | The credential mode used for the catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.defaultLocation">DefaultLocation</a></code> | <code>string</code> | The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.description">Description</a></code> | <code>string</code> | A user-provided description of the catalog. Maximum 1024 UTF-8 characters. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.federatedCatalogOptions">FederatedCatalogOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | federated_catalog_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.primaryLocation">PrimaryLocation</a></code> | <code>string</code> | The primary location for mirroring the remote catalog metadata. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.restrictedLocationsConfig">RestrictedLocationsConfig</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | restricted_locations_config block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.catalogType"></a>

```csharp
public string CatalogType { get; set; }
```

- *Type:* string

The catalog type of the IcebergCatalog.

* 'CATALOG_TYPE_GCS_BUCKET': Google Cloud Storage bucket catalog type.
* 'CATALOG_TYPE_BIGLAKE': BigLake catalog type.
* 'CATALOG_TYPE_FEDERATED': Federated catalog type, for integrating with external Iceberg REST Catalogs such as Databricks Unity Catalog or AWS Glue. Possible values: ["CATALOG_TYPE_GCS_BUCKET", "CATALOG_TYPE_BIGLAKE", "CATALOG_TYPE_FEDERATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#catalog_type GoogleBiglakeIcebergCatalog#catalog_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the IcebergCatalog.

For CATALOG_TYPE_GCS_BUCKET typed catalogs, the name needs to be the
exact same value of the GCS bucket's name. For example, for a bucket:
gs://bucket-name, the catalog name will be exactly "bucket-name".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#name GoogleBiglakeIcebergCatalog#name}

---

##### `CredentialMode`<sup>Optional</sup> <a name="CredentialMode" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.credentialMode"></a>

```csharp
public string CredentialMode { get; set; }
```

- *Type:* string

The credential mode used for the catalog.

CREDENTIAL_MODE_END_USER - End user credentials, default. The authenticating user must have access to the catalog resources and the corresponding Google Cloud Storage files. CREDENTIAL_MODE_VENDED_CREDENTIALS - Use credential vending. The authenticating user must have access to the catalog resources and the system will provide the caller with downscoped credentials to access the Google Cloud Storage files. All table operations in this mode would require 'X-Iceberg-Access-Delegation' header with 'vended-credentials' value included. System will generate a service account and the catalog administrator must grant the service account appropriate permissions. Possible values: ["CREDENTIAL_MODE_END_USER", "CREDENTIAL_MODE_VENDED_CREDENTIALS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#credential_mode GoogleBiglakeIcebergCatalog#credential_mode}

---

##### `DefaultLocation`<sup>Optional</sup> <a name="DefaultLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.defaultLocation"></a>

```csharp
public string DefaultLocation { get; set; }
```

- *Type:* string

The default storage location for the catalog, e.g., 'gs://my-bucket'. Output only when the catalog type is CATALOG_TYPE_GCS_BUCKET. Required when the catalog type is CATALOG_TYPE_BIGLAKE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#default_location GoogleBiglakeIcebergCatalog#default_location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; set; }
```

- *Type:* string

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#deletion_policy GoogleBiglakeIcebergCatalog#deletion_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A user-provided description of the catalog. Maximum 1024 UTF-8 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#description GoogleBiglakeIcebergCatalog#description}

---

##### `FederatedCatalogOptions`<sup>Optional</sup> <a name="FederatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.federatedCatalogOptions"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptions FederatedCatalogOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

federated_catalog_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#federated_catalog_options GoogleBiglakeIcebergCatalog#federated_catalog_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#id GoogleBiglakeIcebergCatalog#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrimaryLocation`<sup>Optional</sup> <a name="PrimaryLocation" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.primaryLocation"></a>

```csharp
public string PrimaryLocation { get; set; }
```

- *Type:* string

The primary location for mirroring the remote catalog metadata.

It must be
a BigLake-supported location, and it should be proximate to the remote
catalog's location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#primary_location GoogleBiglakeIcebergCatalog#primary_location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#project GoogleBiglakeIcebergCatalog#project}.

---

##### `RestrictedLocationsConfig`<sup>Optional</sup> <a name="RestrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.restrictedLocationsConfig"></a>

```csharp
public GoogleBiglakeIcebergCatalogRestrictedLocationsConfig RestrictedLocationsConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

restricted_locations_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#restricted_locations_config GoogleBiglakeIcebergCatalog#restricted_locations_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogConfig.property.timeouts"></a>

```csharp
public GoogleBiglakeIcebergCatalogTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#timeouts GoogleBiglakeIcebergCatalog#timeouts}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptions <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptions {
    GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo GlueCatalogInfo = null,
    GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions RefreshOptions = null,
    string SecretName = null,
    string ServiceDirectoryName = null,
    GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo UnityCatalogInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.glueCatalogInfo">GlueCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | glue_catalog_info block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.refreshOptions">RefreshOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | refresh_options block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.secretName">SecretName</a></code> | <code>string</code> | The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.serviceDirectoryName">ServiceDirectoryName</a></code> | <code>string</code> | The Service Directory service name for private network connectivity through Cross-Cloud Interconnect. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.unityCatalogInfo">UnityCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | unity_catalog_info block. |

---

##### `GlueCatalogInfo`<sup>Optional</sup> <a name="GlueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.glueCatalogInfo"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo GlueCatalogInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

glue_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#glue_catalog_info GoogleBiglakeIcebergCatalog#glue_catalog_info}

---

##### `RefreshOptions`<sup>Optional</sup> <a name="RefreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.refreshOptions"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions RefreshOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

refresh_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#refresh_options GoogleBiglakeIcebergCatalog#refresh_options}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

The secret resource name in Secret Manager, in the format 'projects/{projectId}/locations/{location}/secrets/{secret_id}'. Used to store credentials for authenticating with the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#secret_name GoogleBiglakeIcebergCatalog#secret_name}

---

##### `ServiceDirectoryName`<sup>Optional</sup> <a name="ServiceDirectoryName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.serviceDirectoryName"></a>

```csharp
public string ServiceDirectoryName { get; set; }
```

- *Type:* string

The Service Directory service name for private network connectivity through Cross-Cloud Interconnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#service_directory_name GoogleBiglakeIcebergCatalog#service_directory_name}

---

##### `UnityCatalogInfo`<sup>Optional</sup> <a name="UnityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions.property.unityCatalogInfo"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo UnityCatalogInfo { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

unity_catalog_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#unity_catalog_info GoogleBiglakeIcebergCatalog#unity_catalog_info}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo {
    string AwsRegion,
    string AwsRoleArn,
    string Warehouse
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRegion">AwsRegion</a></code> | <code>string</code> | The AWS region where the Glue catalog is located. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRoleArn">AwsRoleArn</a></code> | <code>string</code> | The ARN of the AWS IAM role to assume for accessing the Glue catalog. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.warehouse">Warehouse</a></code> | <code>string</code> | The AWS Glue warehouse identifier (account ID or S3 table bucket). |

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

The AWS region where the Glue catalog is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#aws_region GoogleBiglakeIcebergCatalog#aws_region}

---

##### `AwsRoleArn`<sup>Required</sup> <a name="AwsRoleArn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.awsRoleArn"></a>

```csharp
public string AwsRoleArn { get; set; }
```

- *Type:* string

The ARN of the AWS IAM role to assume for accessing the Glue catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#aws_role_arn GoogleBiglakeIcebergCatalog#aws_role_arn}

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo.property.warehouse"></a>

```csharp
public string Warehouse { get; set; }
```

- *Type:* string

The AWS Glue warehouse identifier (account ID or S3 table bucket).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#warehouse GoogleBiglakeIcebergCatalog#warehouse}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions {
    GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule RefreshSchedule = null,
    GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope RefreshScope = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshSchedule">RefreshSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | refresh_schedule block. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshScope">RefreshScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | refresh_scope block. |

---

##### `RefreshSchedule`<sup>Optional</sup> <a name="RefreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshSchedule"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule RefreshSchedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

refresh_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#refresh_schedule GoogleBiglakeIcebergCatalog#refresh_schedule}

---

##### `RefreshScope`<sup>Optional</sup> <a name="RefreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions.property.refreshScope"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope RefreshScope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

refresh_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#refresh_scope GoogleBiglakeIcebergCatalog#refresh_scope}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule {
    string RefreshInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.property.refreshInterval">RefreshInterval</a></code> | <code>string</code> | The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh. |

---

##### `RefreshInterval`<sup>Optional</sup> <a name="RefreshInterval" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule.property.refreshInterval"></a>

```csharp
public string RefreshInterval { get; set; }
```

- *Type:* string

The interval between metadata refreshes, expressed as a duration string (e.g., '300s'). The value must be at least 300s or 0s to disable refresh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#refresh_interval GoogleBiglakeIcebergCatalog#refresh_interval}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope {
    string[] NamespaceFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.property.namespaceFilters">NamespaceFilters</a></code> | <code>string[]</code> | A list of namespace filters to limit which namespaces are synchronized from the remote catalog. |

---

##### `NamespaceFilters`<sup>Optional</sup> <a name="NamespaceFilters" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope.property.namespaceFilters"></a>

```csharp
public string[] NamespaceFilters { get; set; }
```

- *Type:* string[]

A list of namespace filters to limit which namespaces are synchronized from the remote catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#namespace_filters GoogleBiglakeIcebergCatalog#namespace_filters}

---

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus {

};
```


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus {

};
```


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo {
    string CatalogName,
    string InstanceName,
    string ServicePrincipalApplicationId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.catalogName">CatalogName</a></code> | <code>string</code> | The name of the catalog within the Unity Catalog instance. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.instanceName">InstanceName</a></code> | <code>string</code> | The Databricks workspace instance name. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.servicePrincipalApplicationId">ServicePrincipalApplicationId</a></code> | <code>string</code> | The application ID of the Databricks service principal for OIDC authentication. |

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

The name of the catalog within the Unity Catalog instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#catalog_name GoogleBiglakeIcebergCatalog#catalog_name}

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

The Databricks workspace instance name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#instance_name GoogleBiglakeIcebergCatalog#instance_name}

---

##### `ServicePrincipalApplicationId`<sup>Optional</sup> <a name="ServicePrincipalApplicationId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo.property.servicePrincipalApplicationId"></a>

```csharp
public string ServicePrincipalApplicationId { get; set; }
```

- *Type:* string

The application ID of the Databricks service principal for OIDC authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#service_principal_application_id GoogleBiglakeIcebergCatalog#service_principal_application_id}

---

### GoogleBiglakeIcebergCatalogReplicas <a name="GoogleBiglakeIcebergCatalogReplicas" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogReplicas {

};
```


### GoogleBiglakeIcebergCatalogRestrictedLocationsConfig <a name="GoogleBiglakeIcebergCatalogRestrictedLocationsConfig" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogRestrictedLocationsConfig {
    string[] RestrictedLocations = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations">RestrictedLocations</a></code> | <code>string[]</code> | A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it. |

---

##### `RestrictedLocations`<sup>Optional</sup> <a name="RestrictedLocations" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig.property.restrictedLocations"></a>

```csharp
public string[] RestrictedLocations { get; set; }
```

- *Type:* string[]

A list of GCS locations (e.g., 'gs://my-other-bucket/...') that are permitted for use by resources within this catalog. Each entry can be either a GCS bucket or a path within it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#restricted_locations GoogleBiglakeIcebergCatalog#restricted_locations}

---

### GoogleBiglakeIcebergCatalogTimeouts <a name="GoogleBiglakeIcebergCatalogTimeouts" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#create GoogleBiglakeIcebergCatalog#create}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#delete GoogleBiglakeIcebergCatalog#delete}. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#update GoogleBiglakeIcebergCatalog#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#create GoogleBiglakeIcebergCatalog#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#delete GoogleBiglakeIcebergCatalog#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/7.44.0/docs/resources/google_biglake_iceberg_catalog#update GoogleBiglakeIcebergCatalog#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArnInput">AwsRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouseInput">WarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArn">AwsRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouse">Warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `AwsRoleArnInput`<sup>Optional</sup> <a name="AwsRoleArnInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArnInput"></a>

```csharp
public string AwsRoleArnInput { get; }
```

- *Type:* string

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouseInput"></a>

```csharp
public string WarehouseInput { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `AwsRoleArn`<sup>Required</sup> <a name="AwsRoleArn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.awsRoleArn"></a>

```csharp
public string AwsRoleArn { get; }
```

- *Type:* string

---

##### `Warehouse`<sup>Required</sup> <a name="Warehouse" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.warehouse"></a>

```csharp
public string Warehouse { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo">PutGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions">PutRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo">PutUnityCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetGlueCatalogInfo">ResetGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetRefreshOptions">ResetRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetServiceDirectoryName">ResetServiceDirectoryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetUnityCatalogInfo">ResetUnityCatalogInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlueCatalogInfo` <a name="PutGlueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo"></a>

```csharp
private void PutGlueCatalogInfo(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putGlueCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---

##### `PutRefreshOptions` <a name="PutRefreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions"></a>

```csharp
private void PutRefreshOptions(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putRefreshOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---

##### `PutUnityCatalogInfo` <a name="PutUnityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo"></a>

```csharp
private void PutUnityCatalogInfo(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.putUnityCatalogInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---

##### `ResetGlueCatalogInfo` <a name="ResetGlueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetGlueCatalogInfo"></a>

```csharp
private void ResetGlueCatalogInfo()
```

##### `ResetRefreshOptions` <a name="ResetRefreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetRefreshOptions"></a>

```csharp
private void ResetRefreshOptions()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetSecretName"></a>

```csharp
private void ResetSecretName()
```

##### `ResetServiceDirectoryName` <a name="ResetServiceDirectoryName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetServiceDirectoryName"></a>

```csharp
private void ResetServiceDirectoryName()
```

##### `ResetUnityCatalogInfo` <a name="ResetUnityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.resetUnityCatalogInfo"></a>

```csharp
private void ResetUnityCatalogInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfo">GlueCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptions">RefreshOptions</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshStatus">RefreshStatus</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfo">UnityCatalogInfo</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfoInput">GlueCatalogInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptionsInput">RefreshOptionsInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryNameInput">ServiceDirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfoInput">UnityCatalogInfoInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryName">ServiceDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GlueCatalogInfo`<sup>Required</sup> <a name="GlueCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfo"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference GlueCatalogInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfoOutputReference</a>

---

##### `RefreshOptions`<sup>Required</sup> <a name="RefreshOptions" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptions"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference RefreshOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference</a>

---

##### `RefreshStatus`<sup>Required</sup> <a name="RefreshStatus" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshStatus"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList RefreshStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList</a>

---

##### `UnityCatalogInfo`<sup>Required</sup> <a name="UnityCatalogInfo" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfo"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference UnityCatalogInfo { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference</a>

---

##### `GlueCatalogInfoInput`<sup>Optional</sup> <a name="GlueCatalogInfoInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.glueCatalogInfoInput"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo GlueCatalogInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsGlueCatalogInfo</a>

---

##### `RefreshOptionsInput`<sup>Optional</sup> <a name="RefreshOptionsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.refreshOptionsInput"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions RefreshOptionsInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `ServiceDirectoryNameInput`<sup>Optional</sup> <a name="ServiceDirectoryNameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryNameInput"></a>

```csharp
public string ServiceDirectoryNameInput { get; }
```

- *Type:* string

---

##### `UnityCatalogInfoInput`<sup>Optional</sup> <a name="UnityCatalogInfoInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.unityCatalogInfoInput"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo UnityCatalogInfoInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `ServiceDirectoryName`<sup>Required</sup> <a name="ServiceDirectoryName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.serviceDirectoryName"></a>

```csharp
public string ServiceDirectoryName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptions</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule">PutRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope">PutRefreshScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshSchedule">ResetRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshScope">ResetRefreshScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRefreshSchedule` <a name="PutRefreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule"></a>

```csharp
private void PutRefreshSchedule(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---

##### `PutRefreshScope` <a name="PutRefreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope"></a>

```csharp
private void PutRefreshScope(GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.putRefreshScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---

##### `ResetRefreshSchedule` <a name="ResetRefreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshSchedule"></a>

```csharp
private void ResetRefreshSchedule()
```

##### `ResetRefreshScope` <a name="ResetRefreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.resetRefreshScope"></a>

```csharp
private void ResetRefreshScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshSchedule">RefreshSchedule</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScope">RefreshScope</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScheduleInput">RefreshScheduleInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScopeInput">RefreshScopeInput</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RefreshSchedule`<sup>Required</sup> <a name="RefreshSchedule" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshSchedule"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference RefreshSchedule { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference</a>

---

##### `RefreshScope`<sup>Required</sup> <a name="RefreshScope" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScope"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference RefreshScope { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference</a>

---

##### `RefreshScheduleInput`<sup>Optional</sup> <a name="RefreshScheduleInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScheduleInput"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule RefreshScheduleInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---

##### `RefreshScopeInput`<sup>Optional</sup> <a name="RefreshScopeInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.refreshScopeInput"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope RefreshScopeInput { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptions</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resetRefreshInterval">ResetRefreshInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRefreshInterval` <a name="ResetRefreshInterval" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.resetRefreshInterval"></a>

```csharp
private void ResetRefreshInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshIntervalInput">RefreshIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshInterval">RefreshInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RefreshIntervalInput`<sup>Optional</sup> <a name="RefreshIntervalInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshIntervalInput"></a>

```csharp
public string RefreshIntervalInput { get; }
```

- *Type:* string

---

##### `RefreshInterval`<sup>Required</sup> <a name="RefreshInterval" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.refreshInterval"></a>

```csharp
public string RefreshInterval { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScheduleOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshSchedule</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resetNamespaceFilters">ResetNamespaceFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNamespaceFilters` <a name="ResetNamespaceFilters" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.resetNamespaceFilters"></a>

```csharp
private void ResetNamespaceFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFiltersInput">NamespaceFiltersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFilters">NamespaceFilters</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NamespaceFiltersInput`<sup>Optional</sup> <a name="NamespaceFiltersInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFiltersInput"></a>

```csharp
public string[] NamespaceFiltersInput { get; }
```

- *Type:* string[]

---

##### `NamespaceFilters`<sup>Required</sup> <a name="NamespaceFilters" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.namespaceFilters"></a>

```csharp
public string[] NamespaceFilters { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScopeOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshOptionsRefreshScope</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get"></a>

```csharp
private GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.status">Status</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.status"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList Status { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatus</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get"></a>

```csharp
private GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.code">Code</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.code"></a>

```csharp
public double Code { get; }
```

- *Type:* double

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatusOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsRefreshStatusStatus</a>

---


### GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference <a name="GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resetServicePrincipalApplicationId">ResetServicePrincipalApplicationId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServicePrincipalApplicationId` <a name="ResetServicePrincipalApplicationId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.resetServicePrincipalApplicationId"></a>

```csharp
private void ResetServicePrincipalApplicationId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationIdInput">ServicePrincipalApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationId">ServicePrincipalApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `ServicePrincipalApplicationIdInput`<sup>Optional</sup> <a name="ServicePrincipalApplicationIdInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationIdInput"></a>

```csharp
public string ServicePrincipalApplicationIdInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `ServicePrincipalApplicationId`<sup>Required</sup> <a name="ServicePrincipalApplicationId" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.servicePrincipalApplicationId"></a>

```csharp
public string ServicePrincipalApplicationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfoOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo">GoogleBiglakeIcebergCatalogFederatedCatalogOptionsUnityCatalogInfo</a>

---


### GoogleBiglakeIcebergCatalogReplicasList <a name="GoogleBiglakeIcebergCatalogReplicasList" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogReplicasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.get"></a>

```csharp
private GoogleBiglakeIcebergCatalogReplicasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleBiglakeIcebergCatalogReplicasOutputReference <a name="GoogleBiglakeIcebergCatalogReplicasOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas">GoogleBiglakeIcebergCatalogReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicasOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergCatalogReplicas InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogReplicas">GoogleBiglakeIcebergCatalogReplicas</a>

---


### GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference <a name="GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations">ResetRestrictedLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRestrictedLocations` <a name="ResetRestrictedLocations" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.resetRestrictedLocations"></a>

```csharp
private void ResetRestrictedLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput">RestrictedLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations">RestrictedLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RestrictedLocationsInput`<sup>Optional</sup> <a name="RestrictedLocationsInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocationsInput"></a>

```csharp
public string[] RestrictedLocationsInput { get; }
```

- *Type:* string[]

---

##### `RestrictedLocations`<sup>Required</sup> <a name="RestrictedLocations" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.restrictedLocations"></a>

```csharp
public string[] RestrictedLocations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfigOutputReference.property.internalValue"></a>

```csharp
public GoogleBiglakeIcebergCatalogRestrictedLocationsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogRestrictedLocationsConfig">GoogleBiglakeIcebergCatalogRestrictedLocationsConfig</a>

---


### GoogleBiglakeIcebergCatalogTimeoutsOutputReference <a name="GoogleBiglakeIcebergCatalogTimeoutsOutputReference" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.GoogleBeta;

new GoogleBiglakeIcebergCatalogTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeoutsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|GoogleBiglakeIcebergCatalogTimeouts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-google-beta.googleBiglakeIcebergCatalog.GoogleBiglakeIcebergCatalogTimeouts">GoogleBiglakeIcebergCatalogTimeouts</a>

---



